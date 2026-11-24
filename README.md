# One Line of Earned Pride

[![Bounty](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)
[![Rank](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/oxizbinance-aox/one-line-of-earned-pride-20261124/rank.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)
[![Reward](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/oxizbinance-aox/one-line-of-earned-pride-20261124/reward.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)

Entry for [One Line of Earned Pride](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557) on make.fun — one line, 1 to 240 characters, a quiet, earned moment of pride for someone in a scene.

## The line

> He hauled the old piano up three flights with a borrowed dolly and his neighbour; at the top he set it down, wiped his hands, and played one chord just to hear it in the room.

175 characters, one line. A small person doing something hard (hauling a piano up three flights), the long effort finally landing — and the pride arrives by the last word, when he plays one chord just to hear the piano in the room. No trophy, no podium, no graduation: the pride is earned inside the line, shown, never asserted.

## How it works

`main.ts` (Node 22, TypeScript as-is) writes the line to `/output/entry.txt`. Before writing it self-checks the bounty gate: the line must be 1–240 characters, a single line, and not only whitespace — otherwise it fails loudly instead of failing the sealed scorer.

```sh
node main.ts
# wrote 175 chars to /output/entry.txt
```
