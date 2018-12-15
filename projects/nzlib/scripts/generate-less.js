const fs = require('fs-extra');
const path = require('path');
const less = require('less');
const LessPluginCleanCSS = require('less-plugin-clean-css');

function compileLess(content, savePath, min) {
  return new Promise((resolve, reject) => {
    const plugins = [];
    if (min) {
      const cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});
      plugins.push(cleanCSSPlugin);
    }
    return less.render
      .call(less, content, {plugins: plugins, javascriptEnabled: true})
      .then(({css}) => {
        fs.writeFileSync(savePath, css);
        resolve();
      })
      .catch(err => reject(err));
  });
}

const sourcePath = path.resolve(__dirname, '../src/components');
const targetPath = path.resolve(__dirname, '../../../dist/nzlib');
const targetComponentsPath = path.resolve(targetPath, './components');
const targetComponentsFolder = fs.readdirSync(targetComponentsPath);
let componentsLessContent = '';

targetComponentsFolder.forEach(dir => {
    if (fs.existsSync(`${sourcePath}/${dir}/style/index.less`)) {
      componentsLessContent += `@import "./components/${path.join(dir, 'style', 'index.less')}";\n`
      fs.copySync(`${sourcePath}/${dir}/style`, `${targetComponentsPath}/${dir}/style`);
    }
  }
)

fs.copySync(path.resolve(sourcePath, 'style'), path.resolve(targetComponentsPath, 'style'));
fs.writeFileSync(`${targetPath}/components.less`, componentsLessContent);

const lessContent=`
@import "./components.less";
@import "./components/style/index.less";
`;
fs.writeFileSync(`${targetPath}/nzlib.less`, lessContent);
//fs.writeFileSync(`${targetPath}/nzlib.less`, fs.readFileSync(`${sourcePath}/ng-zorro-antd.less`));

const lessContent2 = `@import "${path.join(targetPath, 'nzlib.less')}";`;

compileLess(lessContent2, path.join(targetPath, 'nzlib.css'), false);
compileLess(lessContent2, path.join(targetPath, 'nzlib.min.css'), true);
