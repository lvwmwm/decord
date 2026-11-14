// Module ID: 5185
// Function ID: 5186
// Dependencies: [5186, 2, 5188, 5192, 5195, 5196, 5197, 5198, 5199, 5200, 5189, 5191]

// Module 5185
import Dao from "Dao" /* 5188 */;
import Table from "Table" /* 5189 */;
import TableId from "TableId" /* 5191 */;
import Database from "Database" /* 5192 */;
import EntityDao from "EntityDao" /* 5195 */;
import GuildDao from "GuildDao" /* 5196 */;
import GuildEntityDao from "GuildEntityDao" /* 5197 */;
import Kv from "Kv" /* 5198 */;
import MessageDao from "MessageDao" /* 5199 */;
import api_Stats from "api/Stats" /* 5200 */;
import "module_5186";
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
