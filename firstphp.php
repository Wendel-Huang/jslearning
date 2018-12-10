<?php
if($con=mysql_connect('localhost','root','hwydatabase')){
	echo "success";
}else{
	echo "failed";
}
if (mysql_select_db('hwynew')) {
	echo " succeed";
}else{
	echo " failure";
}
mysql_query('insert into test(name) value("bcd")')
?>