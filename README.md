# BOGGLE

Boggle is a word game invented by Allan Turoff and originally distributed by Parker Brothers. The game is played using a plastic grid of lettered dice, in which players attempt to find words in sequences of adjacent letters.

## Rules

The game begins by shaking a covered tray of 16 cubic dice, each with a different letter printed on each of its sides. The dice settle into a 4×4 tray so that only the top letter of each cube is visible. After they have settled into the grid, a three-minute timer is started.

Player searches for words that can be constructed from the letters of sequentially adjacent cubes, where "adjacent" cubes are those horizontally, vertically, and diagonally neighboring. Words must be at least three letters long, may include singular and plural (or other derived forms) separately, but may not use the same letter cube more than once per word.

One cube is printed with "Qu". This is because Q is nearly always followed by U in English words, and if there were a Q in Boggle, it would be challenging to use if a U did not, by chance, appear next to it. For the purposes of scoring Qu counts as two letters: squid would score two points (for a five-letter word) despite being formed from a chain of only four cubes. Early versions of the game had a "Q" without the accompanying "u".

Points are calculated based on following rule:

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

I have created this project using React and Ruby on Rails. Following are version that has been installed while creating:

Ruby Version:

```
ruby 2.6.5p114
```

Rails Version:

```
Rails 6.0.2.2
```

React Version:

```
16.13.1
```

- Clone this repo to your local machine using `https://github.com/mshyam83/Boggle.git`

To run the project execute:

```
$ rails s
```

## Project Structure

Following files are for rails, here in the home controller we have Api created to check for the valid boggle words.

```
--app
---controllers
----home_controller.rb
```

For react we have following files created. Here, Home component uses Jumbotron and GameLoad component. GameLoad component contains all the main logic for populating the board and validaton the words and calling rails api.

```
--app
---javascript
----components
-----Home
------Home.js
------Jumbotron.js
------GameLoad.js
```

## Setup

Following set of command were used to setup this project:

Command to create new project in ruby on rails with react

```
$ rails new <ProjectName> --webpack=react
```

Command to add router

```
$ yarn add react-router
```

Command to create new controller in rails

```
$ rails g controller <Controllername> <ActionName>
```

Command to add bootstrap

```
$ yarn add bootstrap
```

Command to add style

```
$ yarn add styled-components
```

Command to add Axios, it is used to call Api from react to rails

```
$ yarn add axios
```

Added excon to the Gemfile for creating Api in Rails

```
gem 'excon'
```

Then run:

```
$ bundle install
```

## Third Party API

This project uses third party boggle Api from Rapid API to get list of valid words from the given 16 letters.

```
https://codebox-boggle-v1.p.rapidapi.com/
```

Following is the code sample to call the third pary api from rails:

```
  private

  def request_api(url)
    response = Excon.get(
      url,
      headers: {
        'X-RapidAPI-Host' => URI.parse(url).host,
        'X-RapidAPI-Key' => 'a13a617270msh41bd912366869e6p1178b5jsn825c2115762d'
      }
    )

    return nil if response.status != 200

    JSON.parse(response.body)
  end

  def findwords(boggleSet)
    request_api(
      "https://codebox-boggle-v1.p.rapidapi.com/#{(boggleSet)}"
    )
  end
```

## Test

Test sample has been created for the rails Api in the home controller for the validwords action.
To validate the test it can be executed from following command

```
$ rails test
```

## References

Following are the references used while developing this game:

```
https://en.wikipedia.org/wiki/Boggle
https://wordtwist.puzzlebaron.com/init.php
```
