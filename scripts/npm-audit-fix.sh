if npm audit ; then
    echo "Nothing to fix"
else
    git config user.email "kate+agoricbot@agoric.com"
    git config user.name "AgoricBot"

    set -xe
    go get -u -d github.com/github/hub
    cd /go/src/github.com/github/hub
    go install github.com/github/hub

    git checkout -b npm-audit-fix

    npm audit --fix

    git add . 

    git commit -m "results of running npm audit --fix"

    git push -u origin npm-audit-fix

    hub pull-request --no-edit -r katelynsills -l automated,npm-audit-fix
fi
