function trackParcel() {
    let trackingId = document.getElementById("trackingId").value;
    let result = document.getElementById("result");

    if (trackingId === "") {
        result.innerHTML = "<p>Please enter a tracking ID.</p>";
        return;
    }

    if (trackingId.toUpperCase() === "TE12345") {
        result.innerHTML = `
            <div class="result-card">
                <h3>Parcel Details</h3>
                <p><strong>Tracking ID:</strong> TE12345</p>
                <p><strong>Sender:</strong> Hyderabad</p>
                <p><strong>Receiver:</strong> Vijayawada</p>
                <p><strong>Expected Delivery:</strong> 15 September 2026</p>
                <p><strong>Status:</strong> <span class="status">Out for Delivery</span></p>
                <h3>Tracking History</h3>
                <p>✔ Parcel Booked</p>
                <p>✔ Parcel Dispatched</p>
                <p>✔ Arrived at Delivery Hub</p>
                <p>🚚 Out for Delivery</p>
            </div>
        `;
    } else {
        result.innerHTML = `
            <div class="result-card">
                <h3>Parcel Not Found</h3>
                <p>Please check your tracking ID and try again.</p>
            </div>
        `;
    }
}
