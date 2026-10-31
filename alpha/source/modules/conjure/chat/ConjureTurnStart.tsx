// Module ID: 12600
// Function ID: 12601
// Name: ConjureTurnStart
// Dependencies: [11, 2]
// Exports: conjureTurnStartedAt

// Module 12600 (ConjureTurnStart)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureTurnStart.tsx");

export function conjureTurnStartedAt(findOpenTurnResult) {
  let turn_id = findOpenTurnResult.turn_id;
  if (turn_id == null) {
    const steps = findOpenTurnResult.steps;
    let turn_id1;
    const found = steps.find((turn_id) => null != turn_id.turn_id);
    if (found != null) {
      turn_id1 = found.turn_id;
    }
    turn_id = turn_id1;
  }
  if (null != turn_id) {
    let created_at;
    const obj = SnowflakeUtilsDefault;
    const tmp3 = importDefault;
    if (obj.isProbablyAValidSnowflake(turn_id)) {
      const tmp3Result = tmp3(11);
      created_at = tmp3Result.extractTimestamp(turn_id);
    }
    return created_at;
  }
  created_at = findOpenTurnResult.created_at;
}
