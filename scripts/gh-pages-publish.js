const { cd, exec, echo, touch } = require("shelljs");
const { readFileSync } = require("fs");
const url = require("url");
const { execSync } = require("child_process");
require("./copy-cname");
require("./spa-gh-pages");

let repoUrl = "https://github.com/RootLinkFE/newc-web.git";
let pkg = JSON.parse(readFileSync("package.json"));
/* if (typeof pkg.repository === 'object') {
  if (!pkg.repository.hasOwnProperty('url')) {
    throw new Error('URL does not exist in repository section');
  }
  repoUrl = pkg.repository.url;
} else {
  repoUrl = pkg.repository;
} */

let parsedUrl = url.parse(repoUrl);
let repository = (parsedUrl.host || "") + (parsedUrl.path || "");

/* let ghToken = process.env.GH_TOKEN;
let npmUser = process.env.NPM_USER;
let npmEmail = process.env.NPM_EMAIL; */

const npmUser = execSync("git config user.name").toString();
const npmEmail = execSync("git config user.email").toString();
cd("dist");
touch(".nojekyll");
exec("git init");
exec("git add .");
exec(`git config user.name "${npmUser}"`);
exec(`git config user.email "${npmEmail}"`);
exec('git commit -m "docs(docs): update main"');
/* exec(
  `git push --force --quiet "https://${ghToken}@${repository}" master:gh-pages`
); */
// 因为没有在runner执行，本地自己输入账号密码
exec(`git push --force --quiet "${repoUrl}" master:main`);
echo("Docs deployed!!");
