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

After the project is cloned execute following command to update package or install if any missing:

```
$ yarn install
```

To run the project execute:

```
$ rails s
```

After the rails server has been started you can access the Boggle game in localhost and port 3000 if avaiable or above command will denote in which port it will be running:

```
$ rails s
=> Booting Puma
=> Rails 6.0.2.2 application starting in development
=> Run `rails server --help` for more startup options
*** SIGUSR2 not implemented, signal based restart unavailable!
*** SIGUSR1 not implemented, signal based restart unavailable!
*** SIGHUP not implemented, signal based logs reopening unavailable!
Puma starting in single mode...
* Version 4.3.3 (ruby 2.6.5-p114), codename: Mysterious Traveller
* Min threads: 5, max threads: 5
* Environment: development
* Listening on tcp://[::1]:3000
* Listening on tcp://127.0.0.1:3000
Use Ctrl-C to stop

e.g.

http://localhost:3000/

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

e.g.
$ rails new Boggle --webpack=react
```

Command to add router

```
$ yarn add react-router
```

Command to create new controller in rails

```
$ rails g controller <Controllername> <ActionName>

e.g.
$ rails g controller Home Index
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

Command to add notification libary. Here, i have used React-toastify notification component

```
npm install react-toastify@5.1.1
```

After we have installed the React-toastify notification component we can use in our Home.js as:

```
 <ToastContainer autoClose={3000} hideProgressBar />
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

After running the test you will get output as:

```
$ rails test
Run options: --seed 53417

# Running:

..

Finished in 5.853093s, 0.3417 runs/s, 0.3417 assertions/s.
2 runs, 2 assertions, 0 failures, 0 errors, 0 skips

```

Which shows the rails action test executed without any errors.

## References

Following are the references used while developing this game:

```
https://en.wikipedia.org/wiki/Boggle
https://wordtwist.puzzlebaron.com/init.php
```
