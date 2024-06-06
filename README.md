# Roullete Animation Improvement

This is just a suggestion. I think the roullete game animation looks better that way.

![](https://github.com/alexandremccastro/roullete/blob/main/animation-execution.gif)

## Motivation

As a player i want to play games that looks visually good (as the game is), and have the best animations possible.

Currently the game animation is a little strange, because the wheel dont reset to the starting position, and the roullete items are very simple.

## Implementation

I just implemented a version that has better items and the roullete has the hability to reset to its starting position (when match ends).

### Call Function `rollWheel`:

old way: `roll to desired position` > `wait new match result`

new way: `roll to desired position` > `wait 2s` > `back to starting position` > `wait new match result`
