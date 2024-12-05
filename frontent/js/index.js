function donorData(){
    const data=localStorage.getItem('donorData')
    

const donors=JSON.parse(data)

donors.forEach((donor,index)=>{

    console.log(donor.name);
    


    // console.log(donor)
    // document.getElementById('tablebody').innerHTML+=`
    //         <tr>
    //                 <td><input type="text" placeholder="" value="${donor.name}"></td>
    //                 <td><input type="text" placeholder="" value="${donor.gender}"></td>
    //                 <td><input type="text" placeholder="" value="${donor.blood}"></td>
    //                 <td><input type="text" placeholder="" value="${donor.address}"></td>
    //                 <td><input type="text" placeholder="" value="${donor.number}"></td>
    //                 <td><button id="edit">edit</button></td>
    //                 <td><button id="save">save</button></td>
    //                 <td><button id="delete">delete</button></td>
    //             </tr>
    // `
 
})

}


// function donorData() {
//     // Retrieve donor data from localStorage
//     const data = localStorage.getItem('donorData');
    
//     // Check if data exists in localStorage
//     if (!data) {
//         console.error("No donor data found in localStorage.");
//         return;
//     }

//     try {
//         // Parse the data into JavaScript objects
//         const donors = JSON.parse(data);

//         // Validate that the data is an array
//         if (!Array.isArray(donors)) {
//             console.error("Donor data is not an array.");
//             return;
//         }

//         // Loop through each donor and log their details
//         donors.forEach((donor, index) => {
//             console.log(`Donor ${index + 1}: ${donor.name || "Name not available"}`);
            
//             // Optionally populate an HTML table (uncomment the code below if needed)
            
//             document.getElementById('tablebody').innerHTML += `
//                 <tr>
//                     <td><input type="text" value="${donor.name}" /></td>
//                     <td><input type="text" value="${donor.gender }" /></td>
//                     <td><input type="text" value="${donor.blood}" /></td>
//                     <td><input type="text" value="${donor.address}" /></td>
//                     <td><input type="text" value="${donor.number}" /></td>
//                     <td><button id="edit">Edit</button></td>
//                     <td><button id="save">Save</button></td>
//                     <td><button id="delete">Delete</button></td>
//                 </tr>
//             `;
            
//         });
//     } catch (error) {
//         // Handle JSON parsing errors
//         console.error("Error parsing donor data:", error);
//     }
// }
