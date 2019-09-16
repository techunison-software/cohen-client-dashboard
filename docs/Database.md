---
id: doc6
title: document number 6
---
<table>
<thead>
<tr class="header">
<th><strong><span dir="ltr">Database Refresh</span></strong></th>
<th><span dir="ltr"></span></th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><span dir="ltr"></span></td>
<td><span dir="ltr"></span></td>
<td></td>
</tr>
<tr class="even">
<td><strong><span dir="ltr">Project Name</span></strong></td>
<td><span dir="ltr">:</span></td>
<td><blockquote>
<p><span dir="ltr">Algilbert</span></p>
</blockquote></td>
</tr>
<tr class="odd">
<td><strong><span dir="ltr">Revision Number</span></strong></td>
<td><span dir="ltr">:</span></td>
<td><blockquote>
<p><span dir="ltr">1.0</span></p>
</blockquote></td>
</tr>
<tr class="even">
<td><strong><span dir="ltr">Author</span></strong></td>
<td><span dir="ltr">:</span></td>
<td><blockquote>
<p><span dir="ltr">Palanikumar</span></p>
</blockquote></td>
</tr>
<tr class="odd">
<td><strong><span dir="ltr">Reviewer</span></strong></td>
<td><span dir="ltr">:</span></td>
<td><blockquote>
<p><span dir="ltr">Nimesh Patel/ Ramesh Dharmaraj</span></p>
</blockquote></td>
</tr>
<tr class="even">
<td><strong><span dir="ltr">Project Owner</span></strong></td>
<td><span dir="ltr">:</span></td>
<td><blockquote>
<p><span dir="ltr">Techunison Inc.</span></p>
</blockquote></td>
</tr>
</tbody>
</table>

<span dir="ltr"></span>

**<span dir="ltr">Document Control</span>**

<span dir="ltr">*Change Record*</span>

### <span dir="ltr"></span>

| **<span dir="ltr">\#</span>** | **<span dir="ltr">Date</span>**    | **<span dir="ltr">Author Name</span>** | **<span dir="ltr">Version</span>** | **<span dir="ltr">Change Description</span>** |
| ----------------------------- | ---------------------------------- | -------------------------------------- | ---------------------------------- | --------------------------------------------- |
| **<span dir="ltr">1</span>**  | <span dir="ltr">01-Feb-2019</span> | <span dir="ltr">Palanikumar</span>     | <span dir="ltr">1.0</span>         | <span dir="ltr">Modified</span>               |
| **<span dir="ltr">2</span>**  | <span dir="ltr"></span>            | <span dir="ltr"></span>                | <span dir="ltr"></span>            | <span dir="ltr"></span>                       |

### <span dir="ltr"></span>

<span dir="ltr">*Reviewers*</span>

<span dir="ltr"></span>

| **<span dir="ltr">\#</span>** | **<span dir="ltr">Reviewer Name</span>**               | **<span dir="ltr">Role</span>** |
| ----------------------------- | ------------------------------------------------------ | ------------------------------- |
| **<span dir="ltr">1</span>**  | <span dir="ltr">Nimesh Patel / Ramesh Dharmaraj</span> | <span dir="ltr">Head</span>     |

<span dir="ltr"></span>

<span dir="ltr">*Approver*</span>

<span dir="ltr"></span>

| **<span dir="ltr">\#</span>** | **<span dir="ltr">Copy\#</span>** | **<span dir="ltr">Recipient Name</span>** | **<span dir="ltr">Role</span>** | **<span dir="ltr">Location</span>** |
| ----------------------------- | --------------------------------- | ----------------------------------------- | ------------------------------- | ----------------------------------- |
| **<span dir="ltr">1</span>**  | <span dir="ltr"></span>           | <span dir="ltr">Nimesh Patel</span>       | <span dir="ltr">Head</span>     | <span dir="ltr">USA</span>          |
| **<span dir="ltr">2</span>**  | <span dir="ltr"></span>           | <span dir="ltr">Ramesh Dharmaraj</span>   | <span dir="ltr">Head</span>     | <span dir="ltr">USA</span>          |

<span dir="ltr"></span>

***<span dir="ltr">Note to Holders:</span>***

<span dir="ltr">If you receive an electronic copy of this document and
print it out, please write your name on the equivalent of the cover
page, for document control purposes.</span>

<span dir="ltr">If you receive a hard copy of this document, please
write your name on the front cover, for document control
purposes.</span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

# <span dir="ltr">Backup of Production Database</span>

<span dir="ltr"></span>

<span dir="ltr">Note : Refer the credential sheet for the login
credentials corresponding to this server.</span>

<span dir="ltr"></span>

<span dir="ltr">This section of the document will provide the details
steps to take a backup of the JDE\_PRODUCTION Database from the
Production server.</span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 1</span>**

<span dir="ltr">Open the “**Remote Desktop Connection**” application
from the windows taskbar.</span>

<span dir="ltr"></span>

<span dir="ltr">Enter Computer Name/IP: tui-e192entdb /
192.168.1.159</span>

<span dir="ltr"></span>

![](assets/image7.png)<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr">Click “**Connect**”.</span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 2</span>**

<span dir="ltr">Enter the credentials for the server as given
below</span>

<span dir="ltr"></span>

<span dir="ltr">User Name: TECHUNISON\\TUI-E192ENTDB</span>

<span dir="ltr">Password: \*\*\*\*\*\*\*\*\*\*\*\*\*\*</span>

<span dir="ltr"></span>

![](assets/image3.png)<span dir="ltr"></span>

**<span dir="ltr">Step: 3</span>**

<span dir="ltr">Click “**OK**”, the application will verify the
credentials and establish a remote connection to the machine.</span>

<span dir="ltr"></span>

![](assets/image18.png)<span dir="ltr"></span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 4</span>**

<span dir="ltr">Open “**Microsoft SQL Server Management Studio**” on the
remote desktop from the windows taskbar and click “**Connect**” to
connect to a new Database . Enter the details as given below</span>

<span dir="ltr">Server name: tui-e192entdb</span>

<span dir="ltr">Authentication: SQL Server Authentication</span>

<span dir="ltr">Login: JDE</span>

<span dir="ltr">Password: \*\*\*</span>

![](assets/image17.png) <span dir="ltr"> </span>

<span dir="ltr"></span>

<span dir="ltr">Click “**Connect**”.</span>

<span dir="ltr"></span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 5</span>**

<span dir="ltr"></span>

<span dir="ltr">Right click on the “**JDE\_PRODUCTION**” Database and
navigate to Tasks 🡪 Shrink and select Database.</span>

<span dir="ltr"></span>

![](assets/image9.png)<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr">Check the “**Reorganized files before releasing unused
space**” option.</span>

<span dir="ltr">Set the Maximum free space in files after shrinking as
“**3%**”.</span>

<span dir="ltr"> </span>

![](assets/image13.png)<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr">Click “**OK**”</span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 6</span>**

<span dir="ltr"></span>

<span dir="ltr">Right click on the “**JDE\_PRODUCTION**” Database and
navigate to Tasks 🡪 Shrink and select Files.</span>

<span dir="ltr"></span>

![](assets/image10.png)<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr">Select the file type as “**Log**” choose the shrink
action as the “**Release unused space**” option.</span>

<span dir="ltr"></span>

![](assets/image11.png)<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr">Click “**OK**”</span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 7</span>**

<span dir="ltr">Right click on “**JDE\_PRODUCTION**” Database and select
Task🡪Back Up option.</span>

<span dir="ltr"></span>

![](assets/image12.png)<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr">Choose the options for the backup as given below</span>

<span dir="ltr">Backup type : “**Full**”</span>

<span dir="ltr">Check the “**Copy-only-backup**” option</span>

<span dir="ltr">Backup destination path: “**E:\\SQLBackup\\
JDE\_PRODUCTION\_FULL\_02012019.bak”**</span>

<span dir="ltr">Click “**OK**”.</span>

<span dir="ltr"></span>

![](assets/image24.png) <span dir="ltr"> </span>

<span dir="ltr"></span>

![](assets/image22.png)<span dir="ltr"></span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 8</span>**

<span dir="ltr">Once the execution completes, the “**JDE\_PRODUCTION”**
Database backup will be available at the following path: E:\\SQLBackup\\
JDE\_PRODUCTION\_FULL\_02012019.bak</span>

<span dir="ltr"></span>

![](assets/image21.png)<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr">The backup of the “**JDE\_PRODUCTION**” Database is
successfully completed.</span>

<span dir="ltr"></span>

# <span dir="ltr">Restore of JDE\_DEVELOPMENT Database</span>

<span dir="ltr"></span>

<span dir="ltr">This section of the document will provide the detailed
steps to perform a restore operation of the “**JDE\_PRODUCTION**”
database backup to “**JDE\_DEVELOPMENT**” database from the
tui-e192entdb server to the tuijava server.</span>

<span dir="ltr"> </span>

<span dir="ltr">Note:</span>

<span dir="ltr">Refer the credential sheet for the login credentials
corresponding to this server.</span>

<span dir="ltr">Connect the Destination server to follow steps1 to
steps3 from “Backup of PRODUCTION Database”.</span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 1</span>**

<span dir="ltr">Copy the JDE\_PRODUCTION Database backup file to the
destination server and rename the file as
“**JDE\_DEVELOPMENT\_FULL\_02012019.bak**” in the path
**“E:\\SQLBackup\\ JDE\_DEVELOPMENT\_FULL\_02012019.bak”.**</span>

![](assets/image27.png)<span dir="ltr"></span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 2</span>**

<span dir="ltr">Open “**Microsoft SQL Server Management Studio**” and
click “**Connect”** to connect to a new Database and enter the details
as given below</span>

<span dir="ltr">Server name: tuijava</span>

<span dir="ltr">Authentication: SQL Server Authentication</span>

<span dir="ltr">Login: JDE</span>

<span dir="ltr">Password: \*\*\*</span>

<span dir="ltr"></span>

![](assets/image23.png) <span dir="ltr"> </span>

<span dir="ltr"></span>

<span dir="ltr">Click “**Connect**”.</span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 3</span>**

<span dir="ltr">Right-click on the target destination Database and
navigate to **Tasks🡪Restore** and select “**Database**” option.</span>

<span dir="ltr"></span>

![](assets/image25.png)<span dir="ltr"></span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 4</span>**

<span dir="ltr">Enter the following details to restore the
database</span>

<span dir="ltr">Database name : “**JDE\_DEVELOPMENT**”</span>

<span dir="ltr">Choose the from “**Device**” option</span>

<span dir="ltr">Restore database device path : “**E:\\SQLBackup\\
JDE\_DEVELOPMENT\_FULL\_02012019.bak”**</span>

<span dir="ltr"></span>

<span dir="ltr">Click “**OK**”.</span>

<span dir="ltr"></span>

![](assets/image29.png)<span dir="ltr"></span>

**<span dir="ltr">Step: 5</span>**

<span dir="ltr"></span>

<span dir="ltr">Choose the Restore Option as “**Overwrite the existing
database (With Replace)”** to replace the all the files for that target
Schema. (Schema definitions with data)</span>

![](assets/image28.png)<span dir="ltr"></span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 6</span>**

<span dir="ltr">Click “**OK**”.</span>

![](assets/image19.png)<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr">The Restore operation will start executing and once it
completes, the system will issue the following prompt.</span>

<span dir="ltr"></span>

![](assets/image26.png)<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr">The restore of the “**JDE\_DEVELOPMENT**” Database is
successfully completed.</span>

<span dir="ltr"></span>

# <span dir="ltr">Check SQL Login Accounts</span> 

<span dir="ltr"></span>

<span dir="ltr">Using the SQL Script, we can identify the Login account
access details for restored database “JDE\_DEVELOPMENT” from “tuijava”
server. Follow the below detailed steps.</span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 1</span>**

<span dir="ltr">Open Microsoft SQL Server Management Studio and click
connect for new Database.</span>

<span dir="ltr">Server name: tuijava</span>

<span dir="ltr">Authentication: SQL Server Authentication</span>

<span dir="ltr">Login: JDE</span>

<span dir="ltr">Password: \*\*\*</span>

<span dir="ltr"></span>

![](assets/image23.png) <span dir="ltr"> </span>

<span dir="ltr"></span>

<span dir="ltr">Click “**Connect”**.</span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 2</span>**

<span dir="ltr">Right click on JDE\_DEVELOPMENT and select new query,
from the query window copy the below query and “execute” one by
one.</span>

<span dir="ltr"></span>

<span dir="ltr">use JDE\_DEVELOPMENT</span>

<span dir="ltr">go</span>

<span dir="ltr">sp\_adduser 'TESTDTA','TESTDTA'</span>

<span dir="ltr">go</span>

<span dir="ltr">sp\_adduser 'TESTCTL','TESTCTL'</span>

<span dir="ltr">go</span>

<span dir="ltr">sp\_adduser 'DV920','DV920'</span>

<span dir="ltr">go</span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr">use JDE\_DEVELOPMENT</span>

> <span dir="ltr">go</span>
> 
> <span dir="ltr">SP\_CHANGE\_USERS\_LOGIN
> 'UPDATE\_ONE','TESTCTL','TESTCTL'</span>
> 
> <span dir="ltr">GO</span>
> 
> <span dir="ltr">SP\_CHANGE\_USERS\_LOGIN
> 'UPDATE\_ONE','TESTDTA','TESTDTA'</span>
> 
> <span dir="ltr">GO</span>
> 
> <span dir="ltr">SP\_CHANGE\_USERS\_LOGIN
> 'UPDATE\_ONE','DV920','DV920'</span>
> 
> <span dir="ltr">GO</span>

<span dir="ltr"></span>

<span dir="ltr">create schema TESTCTL authorization TESTCTL;</span>

<span dir="ltr"></span>

<span dir="ltr">create schema TESTDTA authorization TESTDTA;</span>

<span dir="ltr"></span>

<span dir="ltr">use JDE\_DEVELOPMENT</span>

> <span dir="ltr">go</span>
> 
> <span dir="ltr">select 'alter schema TESTCTL transfer PRODCTL.' + name
> from sysobjects where type ='u' and user\_name (uid) like '%prodctl%'
> order by name</span>
> 
> <span dir="ltr"></span>
> 
> <span dir="ltr">go</span>
> 
> <span dir="ltr">select 'alter schema TESTDTA transfer PRODDTA.' + name
> from sysobjects where type ='u' and user\_name (uid) like '%proddta%'
> order by name</span>
> 
> <span dir="ltr"></span>
> 
> <span dir="ltr">go</span>
> 
> <span dir="ltr">select 'alter schema TESTDTA transfer PRODDTA.' + name
> from sysobjects where type ='V' and user\_name (uid) like '%proddta%'
> order by name</span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr">use JDE\_DEVELOPMENT</span>

> <span dir="ltr">EXEC sp\_addrolemember N'db\_owner', N'TESTDTA'</span>
> 
> <span dir="ltr">GO</span>
> 
> <span dir="ltr"></span>
> 
> <span dir="ltr">EXEC sp\_addrolemember N'db\_owner', N'TESTCTL'</span>
> 
> <span dir="ltr">GO</span>
> 
> <span dir="ltr"></span>
> 
> <span dir="ltr">EXEC sp\_addrolemember N'db\_owner', N'JDE'</span>
> 
> <span dir="ltr">GO</span>
> 
> <span dir="ltr"></span>
> 
> <span dir="ltr">EXEC sp\_addrolemember N'db\_owner', N'DV920'</span>
> 
> <span dir="ltr">GO</span>

<span dir="ltr"></span>

<span dir="ltr">ALTER USER TESTDTA WITH LOGIN =TESTDTA</span>

<span dir="ltr">ALTER USER TESTCTL WITH LOGIN =TESTCTL</span>

<span dir="ltr"></span>

<span dir="ltr">ALTER ROLE \[JDEADMIN\] ADD MEMBER \[JDE\];</span>

<span dir="ltr"></span>

![](assets/image2.png)<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

![](assets/image1.png)<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 2</span>**

<span dir="ltr">We can identify the user’s login account access for
restored database “JDE\_DEVELOPMENT” on tuijava server like as source
database production server “JDE\_PRODUCTION” database login account
access.</span>

<span dir="ltr"></span>

![](assets/image4.png)<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr">The Login Accounts are:</span>

1.  > <span dir="ltr">TESTCTL</span>

2.  > <span dir="ltr">TESTDTA</span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

# <span dir="ltr">Ensure Permission for SQL Login Accounts</span> 

<span dir="ltr"></span>

<span dir="ltr">To ensure the login accounts permissions with parameters
are same from “JDE\_PRODUCTION” Database and “JDE\_DEVELOPMENT” from
tui-e192entdb to tuijava server. Follow the bellow detailed
steps.</span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 1</span>**

<span dir="ltr">Check TESTCTL account parameters on both Databases
Servers tui-e192entdb and tuijava:</span>

1)  > <span dir="ltr">Server Roles:</span>

<span dir="ltr"></span>

![](assets/image6.png)<span dir="ltr"></span>

<span dir="ltr"></span>

2)  > <span dir="ltr">User Mapping:</span>

<span dir="ltr"></span>

![](assets/image15.png)<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

3)  > <span dir="ltr">Securables:</span>

<span dir="ltr"></span>

![](assets/image14.png)<span dir="ltr"></span>

<span dir="ltr"></span>

**<span dir="ltr">Step: 2</span>**

<span dir="ltr">Check TESTDTA account parameters on both Databases
Servers tui-e192entdb and tuijava:</span>

<span dir="ltr"></span>

1)  > <span dir="ltr">Server Roles:</span>

<span dir="ltr"></span>

![](assets/image20.png)<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

2)  > <span dir="ltr">User Mapping:</span>

<span dir="ltr"></span>

![](assets/image8.png)<span dir="ltr"></span>

<span dir="ltr"></span>

3)  > <span dir="ltr">Securables:</span>

<span dir="ltr"></span>

![](assets/image16.png)<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

<span dir="ltr"></span>

**<span dir="ltr">-----Thank You-----</span>**

<span dir="ltr"></span>
