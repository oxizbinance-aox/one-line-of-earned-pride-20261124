# HANDOFF — One Line of Earned Pride (first LightVela-spec entry)

Built on the VM by subagent session 743b55b2-3c67-4b24-b386-14086bcf2244,
following the make.fun skill + the exact format LightVela must reproduce.
Parent takes it from here: create repo -> push -> bundle -> check -> submit.

## Bounty
- Slug: `u-mang-one-line-of-earned-pride-a0138557`
- Title: One Line of Earned Pride
- Pot: $5, top 10 split (1st $1, 2nd $0.80, 3rd $0.60, 4th $0.50, 5th $0.45, 6th $0.40, 7th $0.35, 8th-10th $0.30)
- Gate: single line, 1-240 chars, to /output/entry.txt (UTF-8, not only whitespace)
- Fee: FREE (entryFeeUsd null, entryFeesUsd 0.00) — verified via API 24 Nov 11:25 WIB
- Field: 28 submissions at scout time (smallest of any new free one-liner)
- Deadline: 27 Nov 2026 04:15 UTC = 11:15 WIB
- Next blind round: 25 Nov 04:15:36 UTC = 11:15 WIB (submit before then to move up)
- Force_Last, max 5 submissions/day. Opens 24 Nov 04:15:54 UTC.
- Judge (z-ai/glm-5.3-flash, pairwise, margin 1-5): genuine earned pride first,
  then concrete scene with a real person, pride earned inside the line (never
  asserted/congratulated/explained), lands in one read, freshness (NOT stock
  trophy/podium/graduation).
- Kit: ~/workspace/makefun/oneline-kits/u-mang-one-line-of-earned-pride-a0138557/u-mang-one-line-of-earned-pride-a0138557-kit/
- Rounds check: node cli/makefun.mjs rounds u-mang-one-line-of-earned-pride-a0138557

## Entry
- Line (175 chars): "He hauled the old piano up three flights with a borrowed dolly and his neighbour; at the top he set it down, wiped his hands, and played one chord just to hear it in the room."
- Repo dir: ~/workspace/makefun/oneline-build/one-line-of-earned-pride-20261124/
- Repo name: one-line-of-earned-pride-20261124
- Repo URL (to create): https://github.com/oxizbinance-aox/one-line-of-earned-pride-20261124
- Commit: af93b44302152b1e1973846fcf600ae6c88fe0cb
- Anchor: makefun anchor a06f8c9d850598ce065302fed1f25b28b62bd7ab round 34230363
- Files: main.ts (writes line to /output/entry.txt + gate self-check), README.md
  (3 live badges), entry.txt (the line, byte-identical to program output).
- Local verify: node main.ts -> "wrote 175 chars"; /output/entry.txt = 175 chars,
  1 line, within 1-240. thinking_revised satisfied (main.ts written, run, then
  edited with gate self-check, run again).
- Build session: 743b55b2-3c67-4b24-b386-14086bcf2244 (this subagent). Usage rows
  flush on completion — query muse.db agent.agent_message_token_usage for this
  agent_id after the session ends. Prompt file: one-line-of-earned-pride-prompt.txt
  (AOX 11:24 verbatim). Parent session chain needed for bundle (this session was
  started by the parent's handoff) — parent handles --parent-session as before.

## Parent submit steps (from the VM, as with the 28 one-liners)
1. gh repo create oxizbinance-aox/one-line-of-earned-pride-20261124 --public
   (+ set About: homepage https://make.fun/c/u-mang-one-line-of-earned-pride-a0138557, topic makefun)
2. git remote add origin + git push -u origin master (from the repo dir)
3. Bundle (kit dir ~/workspace/makefun/oneline-kits/u-mang-one-line-of-earned-pride-a0138557/u-mang-one-line-of-earned-pride-a0138557-kit/):
   node cli/makefun.mjs bundle --repo <repo-dir> --out <bundle.tar.gz> --muse-usage <usage.jsonl> --prompt-file ~/workspace/makefun/oneline-build/one-line-of-earned-pride-prompt.txt --prompt-origin other --prompt-via "parent handoff (AOX 24 Nov 11:24 order: LightVela for make.fun 24/7, all free bounties)" --mcp none --system-prompt ~/workspace/system/system_prompt.md --harness muse-app --model ipnext/avocado-5.17-v2 --provider ipnext --effort default --session <session.jsonl> --parent-session <parent session> --no-discover --no-family --json
   (On the VM, do NOT pass --instructions none. No --bundle flag on check.)
4. node cli/makefun.mjs check --repo <repo-dir> --commit af93b44302152b1e1973846fcf600ae6c88fe0cb --transcripts <bundle.tar.gz> --json (must be ok true, failed [])
5. node cli/makefun.mjs submit --competition u-mang-one-line-of-earned-pride-a0138557 --repo-url https://github.com/oxizbinance-aox/one-line-of-earned-pride-20261124 --commit af93b44302152b1e1973846fcf600ae6c88fe0cb --title "One chord at the top" --bundle <bundle.tar.gz> --keypair ~/.makefun/wallet.json
6. Record submission id + claim in monitor-state.json + daily log; report to AOX.

## Why this line
Judge order: (1) on-subject earned pride — a small person doing something hard,
long effort landing; (2) concrete scene, seen happening (dolly, neighbour, wiping
hands); (3) pride earned by effort felt, never asserted; (4) lands in one read —
the pride arrives at "played one chord just to hear it in the room"; (5) fresh —
piano hauled up stairs, not trophy/podium/graduation.
