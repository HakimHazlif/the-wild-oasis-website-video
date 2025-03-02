import EditReservationForm from "@/app/_components/EditReservationForm";

import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { bookingId } = params;
  const booking = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(booking?.cabinId);
  // CHANGE
  // const reservationId = 23;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>
      <EditReservationForm booking={booking} maxCapacity={maxCapacity} />
    </div>
  );
}
