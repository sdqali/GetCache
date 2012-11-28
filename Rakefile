require 'crxmake'

APP_NAME = "GetCache"
VERSION = "0.1"
PEM_FILE = "getcache.pem"

def package_name(extension)
  "#{APP_NAME}.#{extension}"
end



desc "create crx"
task :create_crx do
  CrxMake.make(
               :ex_dir => "./src",
               :pkey   => "./#{PEM_FILE}",
               :crx_output => "./package/#{package_name('crx')}",
               :verbose => true,
               )
end

desc "create zip for Google Extension Gallery"
task :create_zip do
  CrxMake.zip(
              :ex_dir => "./src",
              :pkey   => "./#{PEM_FILE}",
              :zip_output => "./package/#{package_name('zip')}",
              :verbose => true,
              )
end
