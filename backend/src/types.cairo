// need to translate to cairo

// import Principal "mo:base/Principal";
// import Text "mo:base/Text";
// import List "mo:base/List";
// import Time "mo:base/Time";
// import HashMap "mo:base/HashMap";
// import Array "mo:base/Array";
// import Bool "mo:base/Bool";
// import Float "mo:base/Float";
// module {
//     type Time = Time.Time;
//     // public type UserId = Principal;
//     // 游戏类型 按照每轮游戏持续时长分类
//     public type RoundDuration = {
//         #hour;
//         #day;
//         #week;
//         #month;
//         #season;
//         #year;
//     };

//     public type UserId = Principal;

//     // 一个玩家 某个类型 某一轮的 游戏记录
//     public type OneGuessOfOneCertainRoundOfOneUser = {
//         // 第几轮游戏
//         numberOfGameRounds : Nat;
//         // 本轮游戏玩家猜测的数字
//         guessedNumber : Nat;
//         // 数字提交时间
//         guessedTime : Time.Time;
//     };

//     // 一个玩家 某个类型 所有参加了轮的 游戏记录
//     public type GuessesOfOneUserOfAllRoundsInCertainType = {
//         // 游戏类型 按照每轮游戏持续时长分类: hour | day | week | month | season | year
//         roundDuration : RoundDuration;
//         // 某人 某类型 所有轮 游戏记录列表
//         myCertainTypeAllRoundsGuessesList : List.List<OneGuessOfOneCertainRoundOfOneUser>;
//     };

//     // 一个玩家 所有类型 所有参加了轮次的 猜数记录
//     public type AllGuessesOfAllTypesOfOneUser = {
//         userId : UserId;
//         hourTypeRoundsGuesses : GuessesOfOneUserOfAllRoundsInCertainType;
//         dayTypeRoundsGuesses : GuessesOfOneUserOfAllRoundsInCertainType;
//         weekTypeRoundsGuesses : GuessesOfOneUserOfAllRoundsInCertainType;
//         monthTypeRoundsGuesses : GuessesOfOneUserOfAllRoundsInCertainType;
//         seasonTypeRoundsGuesses : GuessesOfOneUserOfAllRoundsInCertainType;
//         yearTypeRoundsGuesses : GuessesOfOneUserOfAllRoundsInCertainType;
//     };

//     // 所有玩家 所有类型 所有轮次的 猜数记录
//     public type AllGuessesOfAllUsers = HashMap.HashMap<Principal, AllGuessesOfAllTypesOfOneUser>;

//     // 某一类型 某一轮次的 所有玩家的猜数记录
//     public type OneRoundOfOneTypeGuessesRecord = List.List<OneGuessOfOneCertainRoundOfOneUser>;

//     // 某一类型 当前轮次的 状态
//     public type CurrentRoundState = {
//         startTime : Time;
//         endTime : Time;
//         roundCount : Nat;
//         playerCount : Nat;
//     };

//     // 不同类型 游戏配置： points 消耗 | 猜数范围 | 持续时长...
//     public type RoundConf = {
//         pointsCost : Nat;
//         maxNumRange : Nat;
//         minNumRange : Nat;
//         durationSeconds : Nat;
//     };

//     // 某一类型 当前轮次 某个玩家的 猜数记录
//     public type OneCurrentGuessRecord = {
//         player : UserId;
//         guessedNumber : Nat;
//         guessedTime : Time;
//     };

//     // 某一类型 当前轮次的 猜数记录
//     public type CurrentRoundGuessesRecordList = List.List<OneCurrentGuessRecord>;

//     // 判断是否存在 某一类型 当前轮次的 猜数记录
//     public type ResultOfGetMyCurrentRoundGuess = {
//         isExist : Bool;
//         guessedNumber : Nat;
//     };

//     // 玩家积分 Map
//     public type PlayersPointsBalance = HashMap.HashMap<Principal, Nat>;

//     // 玩家 Principal ID List
//     public type UsersIdList = List.List<Principal>;

//     // 上一轮 某一类型 游戏数据
//     public type LastRoundGameResult = {
//         guessedNumSum : Nat;
//         playersAmount : Nat;
//     };

//     // 本轮结束后 从前端传来的 处理完的 RoundEndResultsRecord 数据
//     public type RoundEndResultsRecord = {
//         winnerRecordsArr : [OneCurrentGuessRecord];
//         winnerGottenPoints : Nat;
//         twoThirdsOfAverage : Float;
//     };
// };
