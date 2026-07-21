// Module ID: 5726
// Function ID: 49200
// Name: getGuildChannelPosition
// Dependencies: []
// Exports: default

// Module 5726 (getGuildChannelPosition)
function getGuildChannelPosition(record) {
  if (null == record.parent_id) {
    if (record.type === ChannelTypes.GUILD_CATEGORY) {
      let position = 1000 * (record.position + 1);
    } else {
      position = record.position;
    }
    return position;
  } else {
    const channel = channel.getChannel(record.parent_id);
    position = undefined;
    if (null != channel) {
      position = channel.position;
    }
    let num = 0;
    if (null != position) {
      num = position;
    }
    const sum = num + 1;
    const sum1 = 1000 * sum + record.position;
    if (record.isGuildVocal()) {
      let sum2 = sum1 + 500;
    } else {
      sum2 = sum1;
    }
    return sum2;
  }
}
let closure_0 = importDefault(dependencyMap[0]);
const ChannelTypes = arg1(dependencyMap[1]).ChannelTypes;
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/channel_text_area/compareChannelsByScoreAndPosition.tsx");

export default function compareChannelsByScoreAndPosition(score, score2) {
  if (score.score !== score2.score) {
    return score2.score - score.score;
  } else {
    const tmp4 = getGuildChannelPosition(score.record);
    const tmp5 = getGuildChannelPosition(score2.record);
    if (tmp4 !== tmp5) {
      return tmp4 - tmp5;
    } else {
      let sortable = score.sortable;
      if (null == sortable) {
        const comparator = score.comparator;
        let toLocaleLowerCaseResult;
        if (null != comparator) {
          toLocaleLowerCaseResult = comparator.toLocaleLowerCase();
        }
        sortable = toLocaleLowerCaseResult;
      }
      let str = "";
      let str2 = "";
      if (null != sortable) {
        str2 = sortable;
      }
      let sortable2 = score.sortable;
      if (null == sortable2) {
        const comparator2 = score2.comparator;
        let toLocaleLowerCaseResult1;
        if (null != comparator2) {
          toLocaleLowerCaseResult1 = comparator2.toLocaleLowerCase();
        }
        sortable2 = toLocaleLowerCaseResult1;
      }
      if (null != sortable2) {
        str = sortable2;
      }
      let num = -1;
      if (str2 >= str) {
        let num2 = 0;
        if (str2 > str) {
          num2 = 1;
        }
        num = num2;
      }
      return num;
    }
  }
};
