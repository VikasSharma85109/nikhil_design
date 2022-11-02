import React from 'react'

function MyAccountLeftNav() {
  return (
    <div>
         <ul class="sideBar__">
            <li><a href="my-account.html" >Account Info</a></li>
            <li><a href="notifications.html">Notifications</a></li>
            <li><a href="my-listings.html" className="active">My Listings</a></li>
            <li><a href="my-bids-wins.html">My Bids & Wins</a></li>
            <li><a href="my-shipments.html">My Shipments</a></li>
        </ul>
    </div>
  )
}

export default MyAccountLeftNav