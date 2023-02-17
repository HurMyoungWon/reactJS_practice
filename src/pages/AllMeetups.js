import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadeMeetups, setLoadedMeetups] = useState([]);


  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-router-test-b59ac-default-rtdb.firebaseio.com/meetups.json'
    ).then((response) => {
      return response.json();
    }).then((data) => {
      const meetups = [];

      for(const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups)
    });
  }, []);


  if (isLoading) {
    return (<section>
      <p>Loading .. </p>
    </section>)
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadeMeetups} />
    </section>);

}

export default AllMeetupsPage;