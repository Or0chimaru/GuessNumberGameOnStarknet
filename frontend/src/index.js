// Description: 
// This project is an extension of my previous Internet Computer Hackathon project. 
// Currently I am still learning Starknet.js. 
// The following code will be implemented through Starknet.js later.


/* 
import { createActor, guess_number_game_backend } from "../../declarations/guess_number_game_backend";
import { AuthClient } from "@dfinity/auth-client"
import { HttpAgent } from "@dfinity/agent";

let actor = guess_number_game_backend;
const durationTypesArr = ["hour", "day", "week", "month", "season", "year"];

window.onload = async () => {
  // load players point balance
  let playersPointBalance = await actor.getPlayersPointBalance();
  console.log(playersPointBalance);
  const pointsTableBody = document.querySelector("#pointsTableBody");
  for (let i = 0; i < playersPointBalance.length; i++) {
    let balance = playersPointBalance[i];
    console.log(balance);
    console.log(balance[0]);
    console.log(balance[1]);
    pointsTableBody.insertAdjacentHTML(
      "beforeend",
      `
      <tr>
          <td>${i + 1}</td>
          <td>${balance[0]}</td>
          <td>${balance[1]}</td>
        </tr>
      `
    )
  }

  // load current round count
  let hourCurrentRoundNum = await actor.getCurrentRound({ "hour": null });
  let dayCurrentRoundNum = await actor.getCurrentRound({ "day": null });
  let weekCurrentRoundNum = await actor.getCurrentRound({ "week": null });
  let monthCurrentRoundNum = await actor.getCurrentRound({ "month": null });
  let seasonCurrentRoundNum = await actor.getCurrentRound({ "season": null });
  let yearCurrentRoundNum = await actor.getCurrentRound({ "year": null });

  const hourCurrentRoundCell = document.getElementById("hourCurrentRound");
  const dayCurrentRoundCell = document.getElementById("dayCurrentRound");
  const weekCurrentRoundCell = document.getElementById("weekCurrentRound");
  const monthCurrentRoundCell = document.getElementById("monthCurrentRound");
  const seasonCurrentRoundCell = document.getElementById("seasonCurrentRound");
  const yearCurrentRoundCell = document.getElementById("yearCurrentRound");

  hourCurrentRoundCell.innerText = hourCurrentRoundNum;
  dayCurrentRoundCell.innerText = dayCurrentRoundNum;
  weekCurrentRoundCell.innerText = weekCurrentRoundNum;
  monthCurrentRoundCell.innerText = monthCurrentRoundNum;
  seasonCurrentRoundCell.innerText = seasonCurrentRoundNum;
  yearCurrentRoundCell.innerText = yearCurrentRoundNum;

  // load current players amount
  let hourCurrentRoundPlayersAmount = await actor.getCurrentRoundPlayersAmount({ "hour": null });
  const hourCurrentRoundRlayersAmountCell = document.getElementById("hourCurrentRoundPlayersAmount")
  hourCurrentRoundRlayersAmountCell.innerText = hourCurrentRoundPlayersAmount;
  let dayCurrentRoundPlayersAmount = await actor.getCurrentRoundPlayersAmount({ "day": null });
  const dayCurrentRoundRlayersAmountCell = document.getElementById("dayCurrentRoundPlayersAmount")
  dayCurrentRoundRlayersAmountCell.innerText = dayCurrentRoundPlayersAmount;
  let weekCurrentRoundPlayersAmount = await actor.getCurrentRoundPlayersAmount({ "week": null });
  const weekCurrentRoundRlayersAmountCell = document.getElementById("weekCurrentRoundPlayersAmount")
  weekCurrentRoundRlayersAmountCell.innerText = weekCurrentRoundPlayersAmount;
  let monthCurrentRoundPlayersAmount = await actor.getCurrentRoundPlayersAmount({ "month": null });
  const monthCurrentRoundRlayersAmountCell = document.getElementById("monthCurrentRoundPlayersAmount")
  monthCurrentRoundRlayersAmountCell.innerText = monthCurrentRoundPlayersAmount;
  let seasonCurrentRoundPlayersAmount = await actor.getCurrentRoundPlayersAmount({ "season": null });
  const seasonCurrentRoundRlayersAmountCell = document.getElementById("seasonCurrentRoundPlayersAmount")
  seasonCurrentRoundRlayersAmountCell.innerText = seasonCurrentRoundPlayersAmount;
  let yearCurrentRoundPlayersAmount = await actor.getCurrentRoundPlayersAmount({ "year": null });
  const yearCurrentRoundRlayersAmountCell = document.getElementById("yearCurrentRoundPlayersAmount")
  yearCurrentRoundRlayersAmountCell.innerText = yearCurrentRoundPlayersAmount;

  // load current round remaining time
  let hourCurrentRoundRemainingTime = await actor.getCurrentRoundEndTime({ "hour": null })
  const hourCurrentRoundRemainingTimeCell = document.getElementById("hourCurrentRoundRemainingTime");
  hourCurrentRoundRemainingTimeCell.innerText = hourCurrentRoundRemainingTime;
  let dayCurrentRoundRemainingTime = await actor.getCurrentRoundEndTime({ "day": null })
  const dayCurrentRoundRemainingTimeCell = document.getElementById("dayCurrentRoundRemainingTime");
  dayCurrentRoundRemainingTimeCell.innerText = dayCurrentRoundRemainingTime;
  let weekCurrentRoundRemainingTime = await actor.getCurrentRoundEndTime({ "week": null })
  const weekCurrentRoundRemainingTimeCell = document.getElementById("weekCurrentRoundRemainingTime");
  weekCurrentRoundRemainingTimeCell.innerText = weekCurrentRoundRemainingTime;
  let monthCurrentRoundRemainingTime = await actor.getCurrentRoundEndTime({ "month": null })
  const monthCurrentRoundRemainingTimeCell = document.getElementById("monthCurrentRoundRemainingTime");
  monthCurrentRoundRemainingTimeCell.innerText = monthCurrentRoundRemainingTime;
  let seasonCurrentRoundRemainingTime = await actor.getCurrentRoundEndTime({ "season": null })
  const seasonCurrentRoundRemainingTimeCell = document.getElementById("seasonCurrentRoundRemainingTime");
  seasonCurrentRoundRemainingTimeCell.innerText = seasonCurrentRoundRemainingTime;
  let yearCurrentRoundRemainingTime = await actor.getCurrentRoundEndTime({ "year": null })
  const yearCurrentRoundRemainingTimeCell = document.getElementById("yearCurrentRoundRemainingTime");
  yearCurrentRoundRemainingTimeCell.innerText = yearCurrentRoundRemainingTime;

  // load guess points cost
  let hourRoundGuessPointCost = await actor.getRoundGuessPointsCost({ "hour": null })
  const hourRoundGuessPointsCostCell = document.getElementById("hourRoundGuessPointsCost");
  hourRoundGuessPointsCostCell.innerText = hourRoundGuessPointCost;
  let dayRoundGuessPointCost = await actor.getRoundGuessPointsCost({ "day": null })
  const dayRoundGuessPointsCostCell = document.getElementById("dayRoundGuessPointsCost");
  dayRoundGuessPointsCostCell.innerText = dayRoundGuessPointCost;
  let weekRoundGuessPointCost = await actor.getRoundGuessPointsCost({ "week": null })
  const weekRoundGuessPointsCostCell = document.getElementById("weekRoundGuessPointsCost");
  weekRoundGuessPointsCostCell.innerText = weekRoundGuessPointCost;
  let monthRoundGuessPointCost = await actor.getRoundGuessPointsCost({ "month": null })
  const monthRoundGuessPointsCostCell = document.getElementById("monthRoundGuessPointsCost");
  monthRoundGuessPointsCostCell.innerText = monthRoundGuessPointCost;
  let seasonRoundGuessPointCost = await actor.getRoundGuessPointsCost({ "season": null })
  const seasonRoundGuessPointsCostCell = document.getElementById("seasonRoundGuessPointsCost");
  seasonRoundGuessPointsCostCell.innerText = seasonRoundGuessPointCost;
  let yearRoundGuessPointCost = await actor.getRoundGuessPointsCost({ "year": null })
  const yearRoundGuessPointsCostCell = document.getElementById("yearRoundGuessPointsCost");
  yearRoundGuessPointsCostCell.innerText = yearRoundGuessPointCost;

  // load max and min range number of each type of round
  let hourMinNumRange = await actor.getRoundMinNumRange({ "hour": null });
  let hourMaxNumRange = await actor.getRoundMaxNumRange({ "hour": null });
  const hourMinNumRangeSpan = document.getElementById("hourMinNumRange");
  const hourMaxNumRangeSpan = document.getElementById("hourMaxNumRange");
  hourMinNumRangeSpan.innerText = hourMinNumRange;
  hourMaxNumRangeSpan.innerText = hourMaxNumRange;
  let dayMinNumRange = await actor.getRoundMinNumRange({ "day": null });
  let dayMaxNumRange = await actor.getRoundMaxNumRange({ "day": null });
  const dayMinNumRangeSpan = document.getElementById("dayMinNumRange");
  const dayMaxNumRangeSpan = document.getElementById("dayMaxNumRange");
  dayMinNumRangeSpan.innerText = dayMinNumRange;
  dayMaxNumRangeSpan.innerText = dayMaxNumRange;
  let weekMinNumRange = await actor.getRoundMinNumRange({ "week": null });
  let weekMaxNumRange = await actor.getRoundMaxNumRange({ "week": null });
  const weekMinNumRangeSpan = document.getElementById("weekMinNumRange");
  const weekMaxNumRangeSpan = document.getElementById("weekMaxNumRange");
  weekMinNumRangeSpan.innerText = weekMinNumRange;
  weekMaxNumRangeSpan.innerText = weekMaxNumRange;
  let monthMinNumRange = await actor.getRoundMinNumRange({ "month": null });
  let monthMaxNumRange = await actor.getRoundMaxNumRange({ "month": null });
  const monthMinNumRangeSpan = document.getElementById("monthMinNumRange");
  const monthMaxNumRangeSpan = document.getElementById("monthMaxNumRange");
  monthMinNumRangeSpan.innerText = monthMinNumRange;
  monthMaxNumRangeSpan.innerText = monthMaxNumRange;
  let seasonMinNumRange = await actor.getRoundMinNumRange({ "season": null });
  let seasonMaxNumRange = await actor.getRoundMaxNumRange({ "season": null });
  const seasonMinNumRangeSpan = document.getElementById("seasonMinNumRange");
  const seasonMaxNumRangeSpan = document.getElementById("seasonMaxNumRange");
  seasonMinNumRangeSpan.innerText = seasonMinNumRange;
  seasonMaxNumRangeSpan.innerText = seasonMaxNumRange;
  let yearMinNumRange = await actor.getRoundMinNumRange({ "year": null });
  let yearMaxNumRange = await actor.getRoundMaxNumRange({ "year": null });
  const yearMinNumRangeSpan = document.getElementById("yearMinNumRange");
  const yearMaxNumRangeSpan = document.getElementById("yearMaxNumRange");
  yearMinNumRangeSpan.innerText = yearMinNumRange;
  yearMaxNumRangeSpan.innerText = yearMaxNumRange;

  // check current rounds is end or not
  let hourCurrentRoundIsEnd = await actor.isCurrentRoundEnd({ "hour": null })
  let hourCurrentRoundIsStart = await actor.isCurrentRoundStart({ "hour": null })
  console.log("hourCurrentRoundIsEnd: ", hourCurrentRoundIsEnd);
  if (hourCurrentRoundIsStart) {
    if (hourCurrentRoundIsEnd) {
      let isSuccess = await actor.afterCurrentRoundEnd({ "hour": null })
      if (isSuccess) {
        let hourLastRoundGameResult = await actor.getLastRoundGameResult({ "hour": null })
        let hourTwoThirdsOfAverage = 0
        if (hourLastRoundGameResult.playersAmount != 0) {
          hourTwoThirdsOfAverage = hourLastRoundGameResult.guessedNumSum / hourLastRoundGameResult.playersAmount / 3 * 2
        }
        let hourPointsCost = await actor.getRoundGuessPointsCost({ "hour": null })
        let hourPointsPool = hourPointsCost * hourLastRoundGameResult.playersAmount
        let hourRoundGuessesRecordList = await actor.getCurrentRoundGuessRecordList;
        // 根据 平均数 和 本轮记录 筛选本轮获胜玩家
        let hourRoundWinnersArr = [];
        let guessMinusAverageArr = []
        for (let i = 0; i < hourRoundGuessesRecordList.length; i++) {
          const guessRecord = hourRoundGuessesRecordList[i];
          let guessMinusAverage = guessRecord.guessedNumber - hourTwoThirdsOfAverage
          guessMinusAverageArr.push(guessMinusAverage)
        }
        let minGuessMinusAverage = Math.min(...guessMinusAverageArr)
        let nearestGuessRecordIndexes = guessMinusAverageArr.map((element, index) => element === minGuessMinusAverage ? index : -1).filter(index => index !== -1)
        for (let i = 0; i < nearestGuessRecordIndexes.length; i++) {
          let hourRoundWinnerIndex = nearestGuessRecordIndexes[i]
          let hourRoundWinner = hourRoundGuessesRecordList[hourRoundWinnerIndex]
          hourRoundWinnersArr.push(hourRoundWinner)
        }
        let hourRoundWinnerGottenPoints = hourPointsPool / hourRoundWinnersArr.length
        let hourRoundEndResultsRecord = {
          winnerRecordsArr: hourRoundWinnersArr,
          // 用户 points balance 应该设为 Float 来着！！！
          winnerGottenPoints: parseInt(hourRoundWinnerGottenPoints),
          twoThirdsOfAverage: hourTwoThirdsOfAverage
        }
        await actor.hourRoundResultsHandler(hourRoundEndResultsRecord)
      }
    }
  }
}

const greetButton = document.getElementById("greet");
greetButton.onclick = async (e) => {
  e.preventDefault();

  greetButton.setAttribute("disabled", true);

  // Interact with backend actor, calling the greet method
  const greeting = await actor.greet();

  greetButton.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
};

const loginButton = document.getElementById("login");
loginButton.onclick = async (e) => {
  e.preventDefault();

  // create an auth client
  let authClient = await AuthClient.create();

  // start the login process and wait for it to finish
  await new Promise((resolve) => {
    authClient.login({
      identityProvider: process.env.II_URL,
      onSuccess: resolve,
    });
  });

  // At this point you're authenticated, and you can get the identity from the auth client:
  const identity = authClient.getIdentity();
  // Using the identity obtained from the auth client, you can create an agent to interact with ICP.
  const agent = new HttpAgent({ identity });
  // Using the interface description of our webapp, you create an actor that you use to call the service methods.
  actor = createActor(process.env.GUESS_NUMBER_GAME_BACKEND_CANISTER_ID, {
    agent,
  });

  await actor.firstLogin();

  let myHourCurrentRoundGuess = await actor.getMyCurrentRoundGuess({ "hour": null })
  console.log(myHourCurrentRoundGuess);
  const myHourCurrentRoundGuessCell = document.getElementById("myHourCurrentRoundGuess")
  if (myHourCurrentRoundGuess.isExist) {
    myHourCurrentRoundGuessCell.innerText = myHourCurrentRoundGuess
  } else {
    myHourCurrentRoundGuessCell.innerText = "You haven't guessed yet."
  }

  let myDayCurrentRoundGuess = await actor.getMyCurrentRoundGuess({ "day": null })
  console.log(myDayCurrentRoundGuess);
  const myDayCurrentRoundGuessCell = document.getElementById("myDayCurrentRoundGuess")
  if (myDayCurrentRoundGuess.isExist) {
    myDayCurrentRoundGuessCell.innerText = myDayCurrentRoundGuess
  } else {
    myDayCurrentRoundGuessCell.innerText = "You haven't guessed yet."
  }

  let myWeekCurrentRoundGuess = await actor.getMyCurrentRoundGuess({ "week": null })
  console.log(myWeekCurrentRoundGuess);
  const myWeekCurrentRoundGuessCell = document.getElementById("myWeekCurrentRoundGuess")
  if (myWeekCurrentRoundGuess.isExist) {
    myWeekCurrentRoundGuessCell.innerText = myWeekCurrentRoundGuess
  } else {
    myWeekCurrentRoundGuessCell.innerText = "You haven't guessed yet."
  }

  let myMonthCurrentRoundGuess = await actor.getMyCurrentRoundGuess({ "month": null })
  console.log(myMonthCurrentRoundGuess);
  const myMonthCurrentRoundGuessCell = document.getElementById("myMonthCurrentRoundGuess")
  if (myMonthCurrentRoundGuess.isExist) {
    myMonthCurrentRoundGuessCell.innerText = myMonthCurrentRoundGuess
  } else {
    myMonthCurrentRoundGuessCell.innerText = "You haven't guessed yet."
  }

  let mySeasonCurrentRoundGuess = await actor.getMyCurrentRoundGuess({ "season": null })
  console.log(mySeasonCurrentRoundGuess);
  const mySeasonCurrentRoundGuessCell = document.getElementById("mySeasonCurrentRoundGuess")
  if (mySeasonCurrentRoundGuess.isExist) {
    mySeasonCurrentRoundGuessCell.innerText = mySeasonCurrentRoundGuess
  } else {
    mySeasonCurrentRoundGuessCell.innerText = "You haven't guessed yet."
  }

  let myYearCurrentRoundGuess = await actor.getMyCurrentRoundGuess({ "year": null })
  console.log(myYearCurrentRoundGuess);
  const myYearCurrentRoundGuessCell = document.getElementById("myYearCurrentRoundGuess")
  if (myYearCurrentRoundGuess.isExist) {
    myYearCurrentRoundGuessCell.innerText = myYearCurrentRoundGuess
  } else {
    myYearCurrentRoundGuessCell.innerText = "You haven't guessed yet."
  }

  const hourTakeAGuessButton = document.getElementById("hourTakeAGuessBtn");

  hourTakeAGuessButton.onclick = async (e) => {
    e.preventDefault();
    hourTakeAGuessButton.setAttribute("disabled", true)
    let hourGuessNum = parseInt(document.getElementById("hourGuessVal").value)
    if (hourGuessNum >= 0 & hourGuessNum <= 100) {
      const hourTakeAGuess = await actor.takeAGuess(hourGuessNum, { "hour": null })
      if (hourTakeAGuess) {
        console.log("hour guess has successfully submitted");
      } else {
        console.log("hour guess submit failed");
      }
    } else {
      console.log("please check your number");
    }
    hourTakeAGuessButton.removeAttribute("disabled")
    return false;
  }

  return false;
};
*/