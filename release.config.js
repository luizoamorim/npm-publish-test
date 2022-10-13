module.exports = {
  "branches": ["master", "next"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/changelog",
    ["@semantic-release/github", {
      "assets": [
        {"path": "dist/asset.min.css", "label": "CSS distribution"},
        {"path": "dist/asset.min.js", "label": "JS distribution"}
      ]
    }],
  ],
  "repositoryUrl": "https://github.com/luizoamorim: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/npm-publish-test.git"
}