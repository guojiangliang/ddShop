const program = require('commander')
const fs = require('fs')

program
  .version('0.0.1')
  .parse(process.argv)

let modules = program.args
const notSubmit = ['jd_joy_help.js','jd_joy_help2.js','jd_petTreasureBox.js']
// 过滤出jd_的脚本
console.log(fs.readdirSync(__dirname));
if(modules.length === 0) modules = fs.readdirSync(__dirname).filter(file => (file.search(/^jd_|^jr_|^jx_[a-zA-Z]+\.js$/) !== -1) && !notSubmit.includes(file))
console.log('modules==>', modules)
modules.map(module => require(`${__dirname}/${module}`))