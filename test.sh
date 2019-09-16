git branch comments `git log --author Griswold --pretty="%H" | head -n 1`
git checkout comments
git push -u origin comments
git checkout master
d="DavidGriswoldTeacher"
hub pull-request -d -r ${d} -b comments -h master -m "Comments Thread" \
    -m "Your page is published at https://graded-ib-cs-hl-2019-2020.github.io/summative-assignment-1-${d}." \
    -m "I will put comments and (eventually) a grade for your project on this page - you should get notifications!" \
    -m "Please do NOT push the \"Merge Pull Request\" button, as it will make these comments disappear!"