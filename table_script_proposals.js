function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var email=document.getElementById("email_row"+no);
 var phone=document.getElementById("phone_row"+no);
 var proposal=document.getElementById("proposal_row"+no);
 var bill=document.getElementById("bill_row"+no);
	
 var name_data=name.innerHTML;
 var email_data=email.innerHTML;
 var phone_data=phone.innerHTML;
 var proposal_data=proposal.innerHTML;
 var bill_data=bill.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 email.innerHTML="<input type='text' id='email_text"+no+"' value='"+email_data+"'>";
 phone.innerHTML="<input type='text' id='phone_text"+no+"' value='"+phone_data+"'>";
 proposal.innerHTML="<input type='file' id='proposal_text"+no+"' value='"+proposal_data+"'>";
 bill.innerHTML="<input type='file' id='bill_text"+no+"' value='"+bill_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var email_val=document.getElementById("email_text"+no).value;
 var phone_val=document.getElementById("phone_text"+no).value;
 var proposal_val=document.getElementById("proposal_text"+no).value;
 var bill_val=document.getElementById("bill_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("email_row"+no).innerHTML=email_val;
 document.getElementById("phone_row"+no).innerHTML=phone_val;
 document.getElementById("proposal_row"+no).innerHTML=proposal_val;
 document.getElementById("bill_row"+no).innerHTML=bill_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_email=document.getElementById("new_email").value;
 var new_phone=document.getElementById("new_phone").value;
 var new_proposal=document.getElementById("new_proposal").value;
 var new_bill=document.getElementById("new_bill").value;

	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"
 +table_len+"'>"+new_name+"</td><td id='email_row"+table_len+"'>"+new_email+"</td><td id='phone_row"+table_len+"'>"+new_phone
 +"</td><td id='proposal_row"+table_len+"'>"+new_proposal
 +"</td><td id='bill_row"+table_len+"'>"+new_bill
 +"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len
 +")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len
 +")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_email").value="";
 document.getElementById("new_phone").value="";
 document.getElementById("new_proposal").value="";
 document.getElementById("new_bill").value="";
}

function myFunction() {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("data_table");
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} 
			else {
				tr[i].style.display = "none";
			}
		}
	}
}
