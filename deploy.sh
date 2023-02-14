#!/usr/bin/env sh

# Dừng lại nếu có lỗi xảy ra
set -e

# Di chuyển vào thư mục build
cd dist

# Khởi tạo Git và commit các file
git init
git add -A
git commit -m 'deploy'

# Public các file lên GitHub Pages
git push -f git@github.com:tandd-vn/vuetify3-confirm-dialog.git gh-pages

# Trở lại thư mục gốc
cd -
