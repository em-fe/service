cd docs
git init
git add -A
git commit -m 'docs($site): deploy site'
git push -f git@github.com:em-fe/service.git master:gh-pages
