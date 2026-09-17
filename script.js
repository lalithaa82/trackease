const parcels = {

    "TE12345": {
        sender: "Hyderabad",
        receiver: "Vijayawada",
        delivery: "15 September 2026",
        status: "Out for Delivery",
        history: [
            "Parcel Booked",
            "Parcel Dispatched",
            "Arrived at Delivery Hub",
            "Out for Delivery"
        ]
    },

    "TE12346": {
        sender: "Chennai",
        receiver: "Hyderabad",
        delivery: "16 September 2026",
        status: "In Transit",
        history: [
            "Parcel Booked",
            "Parcel Dispatched",
            "In Transit"
        ]
    },

    "TE12347": {
        sender: "Bengaluru",
        receiver: "Visakhapatnam",
        delivery: "14 September 2026",
        status: "Delivered",
        history: [
            "Parcel Booked",
            "Parcel Dispatched",
            "Arrived at Delivery Hub",
            "Delivered"
        ]
    },

    "TE12348": {
        sender: "Mumbai",
        receiver: "Vijayawada",
        delivery: "18 September 2026",
        status: "Parcel Booked",
        history: [
            "Parcel Booked"
        ]
    },

    "TE12349": {
        sender: "Delhi",
        receiver: "Rajahmundry",
        delivery: "17 September 2026",
        status: "Arrived at Delivery Hub",
        history: [
            "Parcel Booked",
            "Parcel Dispatched",
            "Arrived at Delivery Hub"
        ]
    },

    "TE12350": {
        sender: "Kolkata",
        receiver: "Chennai",
        delivery: "19 September 2026",
        status: "Dispatched",
        history: [
            "Parcel Booked",
            "Parcel Dispatched"
        ]
    },

    "TE12351": {
        sender: "Pune",
        receiver: "Bengaluru",
        delivery: "16 September 2026",
        status: "Out for Delivery",
        history: [
            "Parcel Booked",
            "Parcel Dispatched",
            "Arrived at Delivery Hub",
            "Out for Delivery"
        ]
    }

};


function getStatusClass(status) {

    if (status === "Delivered") {
        return "delivered";
    }

    if (status === "Out for Delivery") {
        return "out";
    }

    if (status === "In Transit" || status === "Dispatched") {
        return "transit";
    }

    if (status === "Arrived at Delivery Hub") {
        return "hub";
    }

    return "booked";
}


function trackParcel() {

    let trackingId = document
        .getElementById("trackingId")
        .value
        .trim()
        .toUpperCase();

    let result = document.getElementById("result");


    if (trackingId === "") {

        result.innerHTML = `
            <div class="result-card">

                <h3>Please Enter a Tracking ID</h3>

                <p>
                    Enter a tracking ID such as TE12345 to check parcel details.
                </p>

            </div>
        `;

        return;
    }


    let parcel = parcels[trackingId];


    if (parcel) {

        let historyHTML = "";

        parcel.history.forEach(function(item, index) {

            let currentClass = "";

            if (index === parcel.history.length - 1) {
                currentClass = "current";
            }

            historyHTML += `
                <div class="timeline-item ${currentClass}">

                    <span class="timeline-dot"></span>

                    <p>${item}</p>

                </div>
            `;
        });


        let statusClass = getStatusClass(parcel.status);


        result.innerHTML = `

            <div class="result-card">

                <div class="result-top">

                    <div>

                        <small>TRACKING ID</small>

                        <h3>${trackingId}</h3>

                    </div>

                    <span class="status ${statusClass}">
                        ${parcel.status}
                    </span>

                </div>


                <div class="route">

                    <div class="location">

                        <small>FROM</small>

                        <strong>${parcel.sender}</strong>

                    </div>


                    <div class="route-arrow">
                        →
                    </div>


                    <div class="location">

                        <small>TO</small>

                        <strong>${parcel.receiver}</strong>

                    </div>

                </div>


                <div class="details-grid">

                    <div class="detail-box">

                        <small>SENDER</small>

                        <strong>${parcel.sender}</strong>

                    </div>


                    <div class="detail-box">

                        <small>RECEIVER</small>

                        <strong>${parcel.receiver}</strong>

                    </div>


                    <div class="detail-box">

                        <small>EXPECTED DELIVERY</small>

                        <strong>${parcel.delivery}</strong>

                    </div>

                </div>


                <h3 class="history-title">
                    Tracking History
                </h3>


                <div class="timeline">

                    ${historyHTML}

                </div>

            </div>

        `;


        result.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    else {

        result.innerHTML = `

            <div class="result-card">

                <h3>❌ Parcel Not Found</h3>

                <p>
                    Tracking ID <strong>${trackingId}</strong>
                    does not exist in the system.
                </p>

                <p>
                    Please check the tracking ID and try again.
                </p>

            </div>

        `;
    }

}


function useId(id) {

    document.getElementById("trackingId").value = id;

    trackParcel();

}