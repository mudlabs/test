const core = require("@actions/core");
const github = require("@actions/github");

(async function(){
  try {
    const token = core.getInput("token");
    const issue = core.getInput("issue");
    const octokit = github.getOctokit(token);
    const post = await octokit.issues.createComment({
      owner: github.context.payload.repository.owner.login,
      repo: github.context.payload.repository.name,
      issue_number: issue,
      body: "I'm a bot comment"
    });
    console.log(post);
  } catch (error) {
    core.setFailed(error);
  }
})();
