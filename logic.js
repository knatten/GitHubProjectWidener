columns = document.getElementsByClassName('project-column');
var width = 95/columns.length;
for (var i=0; i<columns.length; i++)
{
    columns[i].style["min-width"] = "" + width + "%";
    columns[i].style["max-width"] = "" + width + "%";
}
