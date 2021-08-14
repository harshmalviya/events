import { useRouter } from "next/dist/client/router";
import { Fragment } from "react";
import { getEventById } from "../../DUMMY_EVENTS";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/Button";

function EventDetail() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>No event found.</ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
export default EventDetail;
