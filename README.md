# TOP Project : Rock Paper Scissors
My first bonafide project from The Odin Project curriculum

## First Stage | Game Implementation through Browser Console
Benefits I gained from building this stage:
* Deeper knowledge of how functions work in conjunction with each other
* Understanding the use of switch case instead of if else
* Learned how to color console text

## Second Stage | Creating a Playable Game with GUI
Benefits I gained from building this stage:
* Learned to build a webpage from scratch using HTML
  * Deepened knowledge of how to use span, p, div, and button
  * Utilized emmet to increase writing speed
  * Learned how to name classes and id effectively to differentiate them better in CSS
* Styled the webpage using CSS
  *  Learned how to import external font
  *  Solidify knowledge of how to use Flexbox effectively
  *  Utilized hover effects on buttons and transformation styles
  *  Manipulated visibility of buttons to make game more responsive
  *  Manipulated buttons and borders opacity
* Made the game responsive using JS
  * Used querySelector and getElementById to target the classes and IDs in the html
  * Created a randomizer function to get computer choice for rock-paper-scissors
    * Used switch case of 3 different options (rock, paper, scissors)
    * Inserted an image to the HTML through DOM manipulation when the computer makes a selection     
  * Created a function to get player choice when a button is clicked
    * Used addEventListener to the RPS buttons so that player selection is updated when a button is clicked
    * Inserted an image to the HTML through DOM manipulation when the player makes a selection
  * Created a function to compare player choice and computer choice to determine who wins the round
    * Utilized the ability of adding or removing class through JS to give the player better impression of who won the round
    * Each time the player clicks the RPS button, the round number is incremented and displayed on the page
  * Created a function to detect the end of a game and ability to restart the game
    * Removed 'clickability' of RPS buttons when either the player or computer lives reached 0
    * Make the restart game button visible when game ends
