# BOGGLE

Boggle is a word game invented by Allan Turoff and originally distributed by Parker Brothers. The game is played using a plastic grid of lettered dice, in which players attempt to find words in sequences of adjacent letters.

## Rules

The game begins by shaking a covered tray of 16 cubic dice, each with a different letter printed on each of its sides. The dice settle into a 4×4 tray so that only the top letter of each cube is visible. After they have settled into the grid, a three-minute timer is started.

Player searches for words that can be constructed from the letters of sequentially adjacent cubes, where "adjacent" cubes are those horizontally, vertically, and diagonally neighboring. Words must be at least three letters long, may include singular and plural (or other derived forms) separately, but may not use the same letter cube more than once per word.

One cube is printed with "Qu". This is because Q is nearly always followed by U in English words, and if there were a Q in Boggle, it would be challenging to use if a U did not, by chance, appear next to it. For the purposes of scoring Qu counts as two letters: squid would score two points (for a five-letter word) despite being formed from a chain of only four cubes. Early versions of the game had a "Q" without the accompanying "u".

```
Word length Points
    3, 4        1
    5           2
    6           3
    7           5
    8+          11
```

## Instruction

To play the game follow these steps:

- Click on the board to select letters.
- Clicked letters will be displayed in the input box.
- Word with lenght greater than or equal to 3 is only allowed.
- To clear the word user can press **Clear** button.
- Once done click on **Submit** to see if the word is valid and dictionary word or not.
- If valid total score will increment and matched word will be populated.
- Time is set for 180 seconds after that it will not allow to enter any new words.
- To restart the game user can press **Reset** button.

## Clone

- Clone this repo to your local machine using `https://github.com/mshyam83/Boggle.git`

## Setup

Following set of command were used to setup this project:

Command to create new project in ruby on rails with react

```
rails new <ProjectName> --webpack=react
```

Command to add router

```
yarn add react-router
```

Command to create new contoller in rails

```
rails g controller <Controllername> <ActionName>
```

Command to add bootstrap

```
yarn add bootstrap
```

Command to add style

```
yarn add styled-components
```

Command to add Axios
It is used to call Api from react to rails

```
yarn add axios
```

Added excon to the Gemfile for creating Api in Rails

```
gem 'excon'
```
