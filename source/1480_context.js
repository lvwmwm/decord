// Module ID: 1480
// Function ID: 17176
// Name: context
// Dependencies: [31]
// Exports: default

// Module 1480 (context)
import importAllResult from "result";

let context = importAllResult.createContext({
  scheduleUpdate(arg0) {
    const error = new Error("Couldn't find a schedule context.");
    throw error;
  },
  flushUpdates() {
    const error = new Error("Couldn't find a schedule context.");
    throw error;
  }
});

export default function useScheduleUpdate(arg0) {
  context = importAllResult.useContext(context);
  context.scheduleUpdate(arg0);
  const effect = importAllResult.useEffect(context.flushUpdates);
};
export const ScheduleUpdateContext = context;
