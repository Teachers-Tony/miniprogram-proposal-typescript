"use strict";
Component({
    properties: {
        bgcolor: {
            type: String,
            value: '#FFF'
        },
        selector: {
            type: String,
            value: 'skeleton'
        },
        loading: {
            type: String,
            value: 'shine'
        },
        unit: {
            type: String,
            value: 'px'
        }
    },
    data: {
        loadingAni: ['spin', 'chiaroscuro', 'shine'],
        systemInfo: {},
        skeletonRectLists: [],
        skeletonCircleLists: []
    },
    attached: function () {
        var systemInfo = wx.getSystemInfoSync();
        this.setData({
            systemInfo: {
                width: systemInfo.windowWidth,
                height: systemInfo.windowHeight
            },
            loading: this.data.loadingAni.includes(this.data.loading) ? this.data.loading : 'shine'
        });
    },
    ready: function () {
        var _this = this;
        wx.createSelectorQuery().selectAll("." + this.data.selector).boundingClientRect().exec(function (res) {
            _this.setData({
                'systemInfo.height': res[0][0].height + res[0][0].top
            });
        });
        this.rectHandle();
        this.radiusHandle();
    },
    methods: {
        rectHandle: function () {
            var _this = this;
            wx.createSelectorQuery().selectAll("." + this.data.selector + " >>> ." + this.data.selector + "-rect").boundingClientRect().exec(function (res) {
                _this.setData({ skeletonRectLists: res[0] });
            });
        },
        radiusHandle: function () {
            var _this = this;
            wx.createSelectorQuery().selectAll("." + this.data.selector + " >>> ." + this.data.selector + "-radius").boundingClientRect().exec(function (res) {
                _this.setData({ skeletonCircleLists: res[0] });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJza2VsZXRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsTUFBTTtTQUNkO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsVUFBVTtTQUNsQjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE9BQU87U0FDZjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGO0lBS0QsSUFBSSxFQUFFO1FBQ0osVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUM7UUFDNUMsVUFBVSxFQUFFLEVBQUU7UUFDZCxpQkFBaUIsRUFBRSxFQUFFO1FBQ3JCLG1CQUFtQixFQUFFLEVBQUU7S0FDeEI7SUFFRCxRQUFRLEVBQUU7UUFFUixJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxVQUFVLENBQUMsV0FBVztnQkFDN0IsTUFBTSxFQUFFLFVBQVUsQ0FBQyxZQUFZO2FBQ2hDO1lBQ0QsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTztTQUN4RixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsS0FBSyxFQUFFO1FBQ0wsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRW5CLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBVSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3hGLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1osbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzthQUN0RCxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUtELE9BQU8sRUFBRTtRQUNQLFVBQVU7WUFDUixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUM7WUFFbkIsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUMsU0FBUyxDQUFDLE1BQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLGNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLFVBQU8sQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDeEgsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDOUMsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBRUQsWUFBWTtZQUNWLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztZQUVuQixFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsY0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsWUFBUyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUMxSCxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNoRCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvc2tlbGV0b24vc2tlbGV0b24udHNcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBiZ2NvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJyNGRkYnXG4gICAgfSxcbiAgICBzZWxlY3Rvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdza2VsZXRvbidcbiAgICB9LFxuICAgIGxvYWRpbmc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnc2hpbmUnXG4gICAgfSxcbiAgICB1bml0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ3B4J1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgbG9hZGluZ0FuaTogWydzcGluJywgJ2NoaWFyb3NjdXJvJywgJ3NoaW5lJ10sXG4gICAgc3lzdGVtSW5mbzoge30sXG4gICAgc2tlbGV0b25SZWN0TGlzdHM6IFtdLFxuICAgIHNrZWxldG9uQ2lyY2xlTGlzdHM6IFtdXG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8v6buY6K6k55qE6aaW5bGP5a696auY77yM6Ziy5q2i5YaF5a656Zeq546wXG4gICAgY29uc3Qgc3lzdGVtSW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHN5c3RlbUluZm86IHtcbiAgICAgICAgd2lkdGg6IHN5c3RlbUluZm8ud2luZG93V2lkdGgsXG4gICAgICAgIGhlaWdodDogc3lzdGVtSW5mby53aW5kb3dIZWlnaHRcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nOiB0aGlzLmRhdGEubG9hZGluZ0FuaS5pbmNsdWRlcyh0aGlzLmRhdGEubG9hZGluZykgPyB0aGlzLmRhdGEubG9hZGluZyA6ICdzaGluZSdcbiAgICB9KVxuICB9LFxuXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgLy/nu5jliLbog4zmma9cbiAgICB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuc2VsZWN0QWxsKGAuJHt0aGlzLmRhdGEuc2VsZWN0b3J9YCkuYm91bmRpbmdDbGllbnRSZWN0KCkuZXhlYyhyZXMgPT4ge1xuICAgICAgX3RoaXMuc2V0RGF0YSh7XG4gICAgICAgICdzeXN0ZW1JbmZvLmhlaWdodCc6IHJlc1swXVswXS5oZWlnaHQgKyByZXNbMF1bMF0udG9wXG4gICAgICB9KVxuICAgIH0pO1xuICAgIC8v57uY5Yi255+p5b2iXG4gICAgdGhpcy5yZWN0SGFuZGxlKCk7XG4gICAgLy/nu5jliLblnIblvaJcbiAgICB0aGlzLnJhZGl1c0hhbmRsZSgpXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIHJlY3RIYW5kbGUoKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAvL+e7mOWItuS4jeW4puagt+W8j+eahOiKgueCuVxuICAgICAgd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLnNlbGVjdEFsbChgLiR7dGhpcy5kYXRhLnNlbGVjdG9yfSA+Pj4gLiR7dGhpcy5kYXRhLnNlbGVjdG9yfS1yZWN0YCkuYm91bmRpbmdDbGllbnRSZWN0KCkuZXhlYyhyZXMgPT4ge1xuICAgICAgICBfdGhpcy5zZXREYXRhKHsgc2tlbGV0b25SZWN0TGlzdHM6IHJlc1swXSB9KVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgcmFkaXVzSGFuZGxlKCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgLy/nu5jliLbkuI3luKbmoLflvI/nmoToioLngrlcbiAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5zZWxlY3RBbGwoYC4ke3RoaXMuZGF0YS5zZWxlY3Rvcn0gPj4+IC4ke3RoaXMuZGF0YS5zZWxlY3Rvcn0tcmFkaXVzYCkuYm91bmRpbmdDbGllbnRSZWN0KCkuZXhlYyhyZXMgPT4ge1xuICAgICAgICBfdGhpcy5zZXREYXRhKHsgc2tlbGV0b25DaXJjbGVMaXN0czogcmVzWzBdIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSlcbiJdfQ==