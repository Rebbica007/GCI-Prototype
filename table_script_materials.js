function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var type=document.getElementById("type_row"+no);
 var company=document.getElementById("company_row"+no);
 var price=document.getElementById("price_row"+no);
 var phone=document.getElementById("phone_row"+no);
	
 var name_data=name.innerHTML;
 var type_data=type.innerHTML;
 var company_data=company.innerHTML;
 var price_data=price.innerHTML;
 var phone_data=phone.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 type.innerHTML="<input type='text' id='type_text"+no+"' value='"+type_data+"'>";
 company.innerHTML="<input type='text' id='company_text"+no+"' value='"+company_data+"'>";
 price.innerHTML="<input type='text' id='price_text"+no+"' value='"+price_data+"'>";
 phone.innerHTML="<input type='text' id='phone_text"+no+"' value='"+phone_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var type_val=document.getElementById("type_text"+no).value;
 var company_val=document.getElementById("company_text"+no).value;
 var price_val=document.getElementById("price_text"+no).value;
 var phone_val=document.getElementById("phone_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("type_row"+no).innerHTML=type_val;
 document.getElementById("company_row"+no).innerHTML=company_val;
 document.getElementById("price_row"+no).innerHTML=price_val;
 document.getElementById("phone_row"+no).innerHTML=phone_val;

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
 var new_type=document.getElementById("new_type").value;
 var new_company=document.getElementById("new_company").value;
 var new_price=document.getElementById("new_price").value;
 var new_phone=document.getElementById("new_phone").value;

	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"
 +table_len+"'>"+new_name+"</td><td id='type_row"+table_len+"'>"+new_type+"</td><td id='company_row"+table_len+"'>"+new_company
 +"</td><td id='price_row"+table_len+"'>"+new_price
 +"</td><td id='phone_row"+table_len+"'>"+new_phone
 +"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len
 +")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len
 +")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_type").value="";
 document.getElementById("new_company").value="";
 document.getElementById("new_price").value="";
 document.getElementById("new_phone").value="";
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
