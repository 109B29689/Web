<!doctype html>
<?php
	function page_redirect($page) {
		echo "<HTML>\n";
		echo "<HEAD>\n";
		echo "<META HTTP-EQUIV=REFRESH CONTENT=5;URL=\"$page\">\n";
		echo "<TITLE>Redirection...</TITLE>\n";
		echo "</HEAD>\n";
		echo "<BODY>\n</BODY>\n</HTML>";
	}
?>
<html>
<head>
<meta charset="utf-8">
<title>動態網頁設計_測試</title>
<style>
	a{
		text-decoration:none;
		padding: 1%;
	}
</style>
</head>

<!--<body bgcolor="aqua">-->
<body background="bg.jpg">
	<center>
		<h1>資工3A</h1>
		<hr width="50%" color="red">
		<big>
			<a href="test_home.html">首頁</a>&nbsp;&nbsp;&nbsp;
			<a href="test_activity.html">活動資訊</a>&nbsp;&nbsp;&nbsp;
			<a href="test_time.html">時程</a>&nbsp;&nbsp;&nbsp;
			<a href="test_date.html">截止日期</a>&nbsp;&nbsp;&nbsp;
			<a href="test_apply.html">線上報名</a>&nbsp;&nbsp;&nbsp;
			<a href="test_call.html">與我聯絡</a>&nbsp;&nbsp;&nbsp;
		</big>
		<hr width="50%" color="red">
		<h2>線上報名-報名結果</h2>
		<?php
			$name=$_GET["name"];
			$tel=$_GET["tel"];
			if($tel=="")
			{
				echo "<font color=\"red\"><big><big><big><big>你他媽的沒給你生眼睛啊!?沒看到必填啊?</font>";
				echo "<br>5秒後回報名頁面<br>";
				page_redirect("test_apply.html");
			}
			else
			{
				$pep_num=$_GET["pep_num"];
				echo "您的名字:".$name;
				echo "<br>您的電話:".$tel;
				echo "<br>人數:".$pep_num.",金額:".($pep_num-1)*500;
			}
		?>
	</center>
</body>
</html>
