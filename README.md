Access Key: yiuq08kr8uch18y1ttnu0duhmqfakghm

1. Approach
Mô hình hoá các vị trí ngập nước trong thành phố thành các điểm ngập. Mỗi điểm ngập được mô hình thành một class như sau: 
```
class DiemNgap {
  pos: number
  next[]: number 
```
trong đó: 
 *pos: vị trí của điểm ngập nước
 *next[]: mảng chứa vị trí của các điểm ngập nước liên thông

Từ chuỗi N*N đề bài ta khởi tạo được mảng gồm N các điểm ngập nước.
Sau đó, dùng hàm đệ quy `findPath(path, diemNgap, arrayDiemNgap)` để tìm ra vùng ngập nước lớn nhất bằng việc duyệt từng phần tử trong mảng điểm ngập (arrDiemNgap). Đồng thời ta tìm điểm cần xử lý qua việc tìm điểm ngập có số lượng điểm ngập liên thông lớn nhất.
2. Build and Run
