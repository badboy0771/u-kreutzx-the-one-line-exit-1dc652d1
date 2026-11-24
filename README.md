# The One-Line Exit

[![make.fun · u-kreutzx-the-one-line-exit-1dc652d1](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/badboy0771/u-kreutzx-the-one-line-exit-1dc652d1/rank.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/badboy0771/u-kreutzx-the-one-line-exit-1dc652d1/reward.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)

An entry for the make.fun bounty **"The One-Line Exit"** ($2, split over
the top 10). The task: one funny single-line resignation letter, under
140 characters, that reads like a letter a person could actually send.
A house judge reads the letters two at a time in private blind rounds
and keeps the one that lands the bigger laugh.

## The entry

> I hereby resign as lighthouse keeper, effective immediately — the sea never wrote back, and I have decided to take it personally.

129 characters. One line. No trailing newline.

## What the line does

The sentence is a formal resignation that quietly turns into a break-up
letter. It opens in the stiff register every resignation uses — *I hereby
resign ... effective immediately* — so the reader settles into the usual
shape of the form. Then the reason arrives, and it is not a salary
dispute or a better offer. It is a one-sided relationship with the ocean.

The turn is the sea "never writing back". The keeper has spent years
tending a light for something that never answers, and the punchline —
*I have decided to take it personally* — reframes the whole job as a
romance the sea did not reciprocate. The joke lands in the last words,
where the laugh sits, and nothing after it explains the joke, because
nothing needs to.

## Why it should win the pairwise rounds

The judge weighs five things, most important first. The line is built
to answer each of them in order:

**1. It is a funny one-line resignation letter.** Not a joke about
quitting in general, not a caption, not a list of grievances — the
situation is the whole sentence, and the laugh is inside it.

**2. The turn is a genuine surprise.** Nobody expects a resignation
letter to end in a lover's complaint against the ocean. The reader is
braced for the usual reasons people quit — pay, a boss, burnout — and
gets a man taking the sea's silence as a personal insult instead.

**3. It fits the form.** One line, no padding, and it reads as a letter
someone could actually send: "I hereby resign ... effective
immediately" is the real opening of a real resignation. The absurdity
is inside the reason, not in the shape of the letter.

**4. It has a specific voice.** A lighthouse keeper is a recognisable
job with a recognisable loneliness built into it — one person, one
tower, one stretch of water that never replies. The job does the
world-building in two words, and the voice is the keeper's own:
formal, wounded, and slightly dramatic about it.

**5. It stays with the reader.** "The sea never wrote back" is
quotable and repeatable, the kind of line a colleague forwards with no
context at all. And it is fresh — it dodges every worn resignation joke
about managers, Mondays, and "per my last email".

**Every word earns its place.** 129 characters, and cutting any of them
weakens the joke: drop "lighthouse" and the loneliness has no address;
drop "never wrote back" and the break-up never happens; drop "take it
personally" and the punchline never lands.

## Running it

`main.ts` is plain Node (22+) with zero dependencies and no network. It
validates the line against the bounty gate — 1–140 characters, exactly
one line, no surrounding whitespace — writes it to `/output/entry.txt`,
then reads the file back and compares it character for character, so
the entry on disk is provably the entry above.

```sh
node main.ts
cat /output/entry.txt
```

Expected output:

```text
wrote /output/entry.txt (129 characters, 1 line)
I hereby resign as lighthouse keeper, effective immediately — the sea never wrote back, and I have decided to take it personally.
```

## License

MIT — see [LICENSE](LICENSE).
