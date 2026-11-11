// Module ID: 5122
// Function ID: 5123
// Dependencies: [5123, 2, 5125, 5129, 5132, 5133, 5134, 5135, 5136, 5137, 5126, 5128]

// Module 5122
import Dao from "Dao" /* 5125 */;
import Table from "Table" /* 5126 */;
import TableId from "TableId" /* 5128 */;
import Database from "Database" /* 5129 */;
import EntityDao from "EntityDao" /* 5132 */;
import GuildDao from "GuildDao" /* 5133 */;
import GuildEntityDao from "GuildEntityDao" /* 5134 */;
import Kv from "Kv" /* 5135 */;
import MessageDao from "MessageDao" /* 5136 */;
import api_Stats from "api/Stats" /* 5137 */;
import "module_5123";
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/index.tsx");
for (const key10020 in Dao) {
  exports[key10020] = Dao[key10020];
  continue;
}
for (const key10024 in Database) {
  exports[key10024] = Database[key10024];
  continue;
}
for (const key10028 in EntityDao) {
  exports[key10028] = EntityDao[key10028];
  continue;
}
for (const key10032 in GuildDao) {
  exports[key10032] = GuildDao[key10032];
  continue;
}
for (const key10036 in GuildEntityDao) {
  exports[key10036] = GuildEntityDao[key10036];
  continue;
}
for (const key10040 in Kv) {
  exports[key10040] = Kv[key10040];
  continue;
}
for (const key10044 in MessageDao) {
  exports[key10044] = MessageDao[key10044];
  continue;
}
for (const key10048 in api_Stats) {
  exports[key10048] = api_Stats[key10048];
  continue;
}
for (const key10052 in Table) {
  exports[key10052] = Table[key10052];
  continue;
}
for (const key10056 in TableId) {
  exports[key10056] = TableId[key10056];
  continue;
}
