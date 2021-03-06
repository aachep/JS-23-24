define('model', ['jquery'],
	function () {
		return function Model(data) {
			var self = this;
			var curIndex;
			self.data = data;
			self.addItem = function (item) {
				if (item.length === 0) {
					return;
				}
				self.data.push(item);
				return self.data;
			};
			self.removeItem = function (item) {
				var index = self.data.indexOf(item);
				if (index === -1) {
					return;
				}
				self.data.splice(index, 1);
				return self.data;
			};
			self.editItem = function (item) {
				if (item.length === 0) {
					return;
				}

				self.data[curIndex] = item;
				return self.data;
			}

			self.setCurIndex = function (item) {
				var index = self.data.indexOf(item);
				curIndex = index;
			}
		}
	});