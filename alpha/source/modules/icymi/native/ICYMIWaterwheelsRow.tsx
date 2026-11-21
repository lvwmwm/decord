// Module ID: 18155
// Function ID: 18156
// Name: ICYMIWaterwheelsRow
// Dependencies: [19, 21, 17800, 17805, 2]
// Exports: default

// Module 18155 (ICYMIWaterwheelsRow)
import Fragment from "Fragment" /* 21 */;
import useWaterwheelsActions from "useWaterwheelsActions" /* 17800 */;
import WaterwheelsCard from "WaterwheelsCard" /* 17805 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIWaterwheelsRow.tsx");

export default function ICYMIWaterwheelsRow(card) {
  card = card.card;
  const obj = useWaterwheelsActions;
  let closure_0 = obj.useWaterwheelsActions();
  return jsx(WaterwheelsCard.WaterwheelsCard, {
    card,
    onAction(arg0) {
      return closure_0(arg0);
    }
  });
};
