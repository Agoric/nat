git checkout -b npm-audit-fix

npm audit --fix

touch 'testfile'

git add . 

git commit -m "results of running npm audit --fix"

git push -u origin npm-audit-fix

HUB_VERBOSE=1  hub pull-request --no-edit -r katelynsills -l automated,npm-audit-fix
