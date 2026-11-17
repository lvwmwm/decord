// Module ID: 5189
// Function ID: 5190
// Dependencies: [5190, 2, 5192, 5196, 5199, 5200, 5201, 5202, 5203, 5204, 5193, 5195]

// Module 5189
import Dao from "Dao" /* 5192 */;
import Table from "Table" /* 5193 */;
import TableId from "TableId" /* 5195 */;
import Database from "Database" /* 5196 */;
import EntityDao from "EntityDao" /* 5199 */;
import GuildDao from "GuildDao" /* 5200 */;
import GuildEntityDao from "GuildEntityDao" /* 5201 */;
import Kv from "Kv" /* 5202 */;
import MessageDao from "MessageDao" /* 5203 */;
import api_Stats from "api/Stats" /* 5204 */;
import "module_5190";
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
