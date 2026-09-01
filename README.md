# Vườn Toán

Website nội dung Toán học dành cho học sinh, giáo viên và người làm nghiên cứu. Bản đầu tiên gồm:

- trang chủ theo concept “Vườn Toán”;
- kho bài viết có tìm kiếm và lọc theo người đọc;
- công thức LaTeX bằng KaTeX;
- gợi ý và lời giải có thể mở từng phần;
- chế độ in hoặc lưu PDF sạch;
- giao diện sáng/tối và thiết kế đáp ứng điện thoại;
- tự động xuất bản bằng GitHub Pages.

## Chạy trên máy tính

Yêu cầu Node.js 24.

```bash
npm install
npm run dev
```

Mở địa chỉ do Astro hiển thị, mặc định là `http://localhost:4321`.

Kiểm tra bản xuất bản:

```bash
npm run build
npm run preview
```

## Đăng một bài mới

1. Sao chép `templates/bai-viet-moi.mdx` vào `src/content/posts/`.
2. Đổi tên tệp thành chữ thường, không dấu, nối bằng dấu gạch ngang, ví dụ `dinh-ly-thales.mdx`.
3. Điền phần thông tin ở đầu tệp và viết nội dung bên dưới.
4. Đổi `draft: true` thành `draft: false` khi muốn công khai.
5. Commit lên nhánh `main`; GitHub Actions sẽ tự xây và xuất bản lại website.

Các giá trị được chấp nhận:

- `section`: `hat-giong`, `loi-giai-dep`, `cay-chuyen-de`, `nha-kinh`;
- `audience`: `hoc-sinh`, `giao-vien`, `nghien-cuu`;
- `difficulty`: `co-ban`, `van-dung`, `nang-cao`.

## Thành phần dùng trong bài

```mdx
<Hint>

Gợi ý được ẩn lúc đầu.

</Hint>

<Solution>

Lời giải được ẩn lúc đầu.

</Solution>

<Note>

**Lưu ý.** Một nhận xét cần nhấn mạnh.

</Note>
```

## Xuất bản lần đầu

Trong GitHub, mở `Settings → Pages`, ở mục `Build and deployment → Source` chọn **GitHub Actions**. Workflow `Deploy Vườn Toán` sẽ chạy sau mỗi lần cập nhật nhánh `main`.

Địa chỉ mặc định của dự án này là:

`https://trandainghia294.github.io/vuon-toan/`

## Cấu trúc chính

```text
src/
├── components/          giao diện tái sử dụng
├── content/posts/       các bài viết MDX
├── layouts/             khung trang
├── pages/               các trang và đường dẫn
└── styles/              hệ thống giao diện
```
