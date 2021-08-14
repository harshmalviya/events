import { getFeaturedEvents } from "../DUMMY_EVENTS";
import EventList from "../components/events/EventList";

export default function HomePage() {
  
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents}  />
    </div>
  );
}
