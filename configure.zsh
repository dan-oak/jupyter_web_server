get () {
  yq eval .$1 config.yaml
}

port=$(get port)

sed -e 's/{{port:configured}}/'$port'/' \
  webpack.config.template.js > webpack.config.js
sed -e 's/"{{port:configured}}"/'$port'/' \
  config.template.py > config.py
