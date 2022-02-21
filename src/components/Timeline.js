import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#8795fa", color: "#fff" }}
        >
          <h3 className="text-black font-bold text-3xl">Phase 1</h3>
          <ul className="mt-2">
            <li>- Launch</li>
            <li>- Telegram based marketing takes off</li>
            <li>- Twitter marketing</li>
            <li>- Sub-500 Holders</li>
            <li>- Listed on CMC & CG</li>
            <li>- Giveaways</li>
            <li>- Live VCs for community to decide next charity</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#8795fa", color: "#fff" }}
        >
          <h3 className="text-black font-bold text-3xl">Phase 2</h3>
          <ul className="mt-2">
            <li>- Charitable organisations partnerships</li>
            <li>- Certik Audit</li>
            <li>
              - Third World Inu NFTs and merchandise - 80% proceeding to just
              charity
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#8795fa", color: "#fff" }}
        >
          <h3 className="text-black font-bold text-3xl">Phase 3</h3>
          <ul className="mt-2">
            <li>- TBA</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}
