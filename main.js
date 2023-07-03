    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    // Khi button xóa được click thì ẩn phần tử li chứa nó
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    // Thêm class checked vào thẻ li nào được click
    var list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);

    // Thêm công việc mới khi click vào button "thêm"
    function newElement() {
                                // tạo node li
                                var li = document.createElement("li");
                                // lấy giá trị người dùng nhập
                                var inputValue = document.getElementById("myInput").value;
                                // tạo đối tượng text node
                                var t = document.createTextNode(inputValue);
                                // gán text node cho thẻ li vừa tạo
                                li.appendChild(t);
                                // kiểm tra nếu text node rỗng thì cảnh báo, nếu không thì thêm vào trong thẻ ul
                                if (inputValue === '') {
                                    alert("You must write something!");
                                        } else {
                                            document.getElementById("myUL").appendChild(li);
                                            }
                                // xóa giá trị thẻ input
                                document.getElementById("myInput").value = "";
                                // thêm button xóa vào thẻ li mới tạo
                                var span = document.createElement("SPAN");
                                var txt = document.createTextNode("\u00D7");
                                    span.className = "close";
                                    span.appendChild(txt);
                                    li.appendChild(span);
                                // gán lại sự kiện cho các button xóa
                                for (i = 0; i < close.length; i++) {
                                    close[i].onclick = function () {
                                        var div = this.parentElement;
                                        div.style.display = "none";
                                            }
                                    }
                            }
