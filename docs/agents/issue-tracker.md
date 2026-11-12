# Issue tracker: GitHub

Issues and specs for this repo live as GitHub issues in **ssaid78/claude-code**. Use the `gh` CLI for all operations.

## Conventions

- **Create an issue**: `gh issue create --repo ssaid78/claude-code --title "..." --body "..."`. Use a heredoc for multi-line bodies.
- **Read an issue**: `gh issue view <number> --repo ssaid78/claude-code --json number,title,body,labels,comments`.
- **List issues**: `gh issue list --repo ssaid78/claude-code --state open --json number,title,body,labels,comments --jq '[.[] | {number, title, body, labels: [.labels[].name], comments: [.comments[].body]}]'` with appropriate `--label` and `--state` filters.
- **Make an issue a sub-issue of a parent**: `gh issue create --parent <parent> ...`, or `gh issue edit <parent> --add-sub-issue <child>` afterwards (`gh` 2.94+). Older `gh`: `gh api --method POST repos/ssaid78/claude-code/issues/<parent>/sub_issues -F sub_issue_id=<child-db-id>` (database id, as in **Blocking** below). Without sub-issues, put `Part of #<parent>` at the top of the child body.
- **Comment on an issue**: `gh issue comment <number> --repo ssaid78/claude-code --body "..."`
- **Apply / remove labels**: `gh issue edit <number> --add-label "..."` / `--remove-label "..."`
- **Close**: `gh issue close <number> --comment "..."`

Note: this workspace is not yet a git clone of `ssaid78/claude-code` — pass `--repo ssaid78/claude-code` explicitly to `gh` commands run from here until a remote is set up, after which `gh` will infer it automatically.

## Pull requests as a triage surface

**PRs as a request surface: no.**

## When a skill says "publish to the issue tracker"

Create a GitHub issue.

## When a skill says "fetch the relevant ticket"

Read it as in **Read an issue** above.

## Wayfinding operations

Used by `/wayfinder`. The **map** is a single issue with **child** issues as tickets.

- **Map**: a single issue labelled `wayfinder:map`, holding the Notes / Decisions-so-far / Fog body.
- **Child ticket**: an issue linked to the map as a GitHub sub-issue. Where sub-issues aren't enabled, add the child to a task list in the map body and put `Part of #<map>` at the top of the child body. Labels: `wayfinder:<type>` (`research`/`prototype`/`grilling`/`task`).
- **Blocking**: GitHub's native issue dependencies. Fall back to a `Blocked by: #<n>, #<n>` line at the top of the child body if unavailable.
- **Claim**: `gh issue edit <n> --add-assignee @me`.
- **Resolve**: comment with the answer, close the issue, append a context pointer to the map's Decisions-so-far.
