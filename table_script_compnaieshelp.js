function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var category=document.getElementById("category_row"+no);
 var email=document.getElementById("email_row"+no);
 var phone=document.getElementById("phone_row"+no);
 var mail=document.getElementById("mail_row"+no);
 var website=document.getElementById("website_row"+no);

	
 var name_data=name.innerHTML;
 var category_data=category.innerHTML;
 var email_data=email.innerHTML;
 var phone_data=phone.innerHTML;
 var mail_data=mail.innerHTML;
 var website_data=website.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 category.innerHTML="<input type='text' id='category_text"+no+"' value='"+category_data+"'>";
 email.innerHTML="<input type='text' id='email_text"+no+"' value='"+email_data+"'>";
 phone.innerHTML="<input type='text' id='phone_text"+no+"' value='"+phone_data+"'>";
 mail.innerHTML="<input type='text' id='mail_text"+no+"' value='"+mail_data+"'>";
 website.innerHTML="<input type='text' id='website_text"+no+"' value='"+website_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var category_val=document.getElementById("category_text"+no).value;
 var email_val=document.getElementById("email_text"+no).value;
 var phone_val=document.getElementById("phone_text"+no).value;
 var mail_val=document.getElementById("mail_text"+no).value;
 var website_val=document.getElementById("website_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("category_row"+no).innerHTML=category_val;
 document.getElementById("email_row"+no).innerHTML=email_val;
 document.getElementById("phone_row"+no).innerHTML=phone_val;
 document.getElementById("mail_row"+no).innerHTML=mail_val;
 document.getElementById("website_row"+no).innerHTML=website_val;

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
 var new_category=document.getElementById("new_category").value;
 var new_email=document.getElementById("new_email").value;
 var new_phone=document.getElementById("new_phone").value;
 var new_mail=document.getElementById("new_mail").value;
 var new_website=document.getElementById("new_website").value;

	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"
 +table_len+"'>"+new_name+"</td><td id='category_row"
 +table_len+"'>"+new_category+"</td><td id='email_row"+table_len+"'>"+new_email+"</td><td id='phone_row"+table_len+"'>"+new_phone
 +"</td><td id='mail_row"+table_len+"'>"+new_mail
 +"</td><td id='website_row"+table_len+"'>"+new_website
 +"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len
 +")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len
 +")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_category").value="";
 document.getElementById("new_email").value="";
 document.getElementById("new_phone").value="";
 document.getElementById("new_mail").value="";
 document.getElementById("new_website").value="";
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
