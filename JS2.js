function alpha(str) {
    var arr = str.split("");
    res = arr.sort().join("");
    rws = res.replace(/\s+/g, "");
    return rws;
  }
  first=document.getElementById('word_org')
  first.innerHTML="The  Original word is  webmaster";
  second=document.getElementById('word')
  second.innerHTML="The  Sorted word is " +alpha("webmaster");
