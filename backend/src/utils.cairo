// need to translate to cairo

// import List "mo:base/List";
// import Array "mo:base/Array";
// import Bool "mo:base/Bool";
// import Principal "mo:base/Principal";
// import Types "./types";
// import Option "mo:base/Option";
// import HashMap "mo:base/HashMap";
// import Text "mo:base/Text";
// import Iter "mo:base/Iter";

// module {
//     type Text = Text.Text;
//     type OneCurrentGuessRecord = Types.OneCurrentGuessRecord;
//     type CurrentRoundGuessesRecordList = Types.CurrentRoundGuessesRecordList;
//     type RoundDuration = Types.RoundDuration;
//     type CurrentRoundState = Types.CurrentRoundState;
//     // public func isPlayed(players : List.List<Principal>, player : Principal) : Bool {
//     //     var isFound = false;
//     //     var result = List.find<Principal>(players, func(p : Principal) { p == player });
//     //     if (result != null) {
//     //         isFound := true;
//     //     };
//     //     return isFound;
//     // };

//     public func isLogin(principalID : Principal) : Bool {
//         Principal.toText(principalID) != "2vxsx-fae";
//     };

//     public func isFirstLogin(principalID : Principal, players : List.List<Principal>) : Bool {
//         var isFirst = true;
//         var result = List.find<Principal>(players, func(p : Principal) { p == principalID });
//         if (result != null) {
//             isFirst := false;
//         };
//         return isFirst;
//     };

//     // 定义一个函数，将HashMap<HashMap<Principal, Nat>的值转换为[(Text, Nat)]的值
//     public func convertBalanceMap(map : HashMap.HashMap<Principal, Nat>) : [(Text, Nat)] {
//         let size = map.size();
//         var tempMap : HashMap.HashMap<Text, Nat> = HashMap.HashMap<Text, Nat>(size, Text.equal, Text.hash);
//         // 遍历HashMap中的所有key-value对
//         for ((key, value) in map.entries()) {
//             // 将Principal类型的键转换为Text类型，并添加到临时map中
//             let textKey = Principal.toText(key);
//             tempMap.put(textKey, value);
//         };
//         // 将临时map转为目标数组
//         let resultArray : [(Text, Nat)] = Iter.toArray(tempMap.entries());
//         return resultArray;
//     };

//     // 判断 某个类型 某玩家 当前轮 是否已提交
//     public func hasGuessedInCurrentRound(userId : Principal, recordList : CurrentRoundGuessesRecordList) : Bool {
//         var hasGuessed : Bool = false;
//         let res : ?OneCurrentGuessRecord = List.find<OneCurrentGuessRecord>(
//             recordList,
//             func guessRecord {
//                 guessRecord.player == userId;
//             },
//         );
//         if (res != null) {
//             hasGuessed := true;
//         };
//         return hasGuessed;
//     };

//     // 判断 某个类型 当前轮 是否已结束
//     public func isCurrentRoundEnd(callingTime : Nat, roundState : CurrentRoundState) : Bool {
//         var isEnd : Bool = false;
//         if (callingTime > roundState.endTime) {
//             isEnd := true;
//         };
//         return isEnd;
//     };

//     // type GuessRecordsList = Types.GuessRecordsList;
//     // public func calculateAverage(recordsList: GuessRecordsList) : async Nat {

//     //     // var sum = 0;
//     //     // let len = Array.size(arr);
//     //     // var i = 0;
//     //     // while (i < len) {
//     //     //     sum += arr[i];
//     //     //     i += 1;
//     //     // };
//     //     // return sum / len;

//     //     return 1
//     // };
// };
