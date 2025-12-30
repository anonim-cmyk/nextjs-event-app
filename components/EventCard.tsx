import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`events/${slug}`} id="event-card">
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="poster"
      />

      <div className="flex items-center space-x-2">
        <Image src={"/icons/pin.svg"} width={14} height={14} alt="pin" />
        <p>{location}</p>
      </div>

      <p className="title">{title}</p>

      <div className="datetime">
        <div>
          <Image
            src={"/icons/calendar.svg"}
            alt="calendar"
            width={14}
            height={14}
          />
          <p>{date}</p>
        </div>

        <div>
          <Image src={"/icons/clock.svg"} width={14} height={14} alt="clock" />
          {time}
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
